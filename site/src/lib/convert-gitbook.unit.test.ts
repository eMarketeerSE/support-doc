import assert from 'node:assert'
import { describe, it } from 'node:test'
import { convertGitbook } from './convert-gitbook'

const FILE = 'guides/x.md'

const convert = (lines: string[]): string => convertGitbook(lines.join('\n'), FILE)

describe('convertGitbook', () => {
  it('should turn a content-ref into an empty link card', () => {
    assert.strictEqual(
      convert(['{% content-ref url="create-new-campaign.md" %}', 'create-new-campaign.md', '{% endcontent-ref %}']),
      '<a class="card" href="create-new-campaign.md"></a>',
    )
  })

  it('should turn a stepper into an ordered list of steps', () => {
    assert.strictEqual(
      convert([
        '{% stepper %}',
        '{% step %}',
        '### Open Campaigns',
        '',
        'Pick a folder.',
        '{% endstep %}',
        '',
        '{% step %}',
        '### Click \\[New Campaign]',
        '{% endstep %}',
        '{% endstepper %}',
      ]),
      [
        '<ol class="steps" role="list">',
        '',
        '<li class="step">',
        '',
        '### Open Campaigns',
        '',
        'Pick a folder.',
        '',
        '</li>',
        '',
        '<li class="step">',
        '',
        '### Click \\[New Campaign]',
        '',
        '</li>',
        '',
        '</ol>',
      ].join('\n'),
    )
  })

  it('should turn a hint into an aside', () => {
    assert.strictEqual(
      convert(['{% hint style="warning" %}', 'This cannot be undone.', '{% endhint %}']),
      ['<aside class="hint hint-warning">', '', 'This cannot be undone.', '', '</aside>'].join('\n'),
    )
  })

  it('should turn columns into column divs', () => {
    assert.strictEqual(
      convert(['{% columns %}', '{% column %}', 'Left', '{% endcolumn %}', '', '{% column %}', 'Right', '{% endcolumn %}', '{% endcolumns %}']),
      [
        '<div class="columns">',
        '',
        '<div>',
        '',
        'Left',
        '',
        '</div>',
        '',
        '<div>',
        '',
        'Right',
        '',
        '</div>',
        '',
        '</div>',
      ].join('\n'),
    )
  })

  it('should turn tabs into a heading per tab', () => {
    assert.strictEqual(
      convert(['{% tabs %}', '{% tab title="Windows" %}', 'Press Ctrl.', '{% endtab %}', '{% tab title="Mac" %}', 'Press Cmd.', '{% endtab %}', '{% endtabs %}']),
      ['#### Windows', '', 'Press Ctrl.', '', '#### Mac', '', 'Press Cmd.'].join('\n'),
    )
  })

  it('should start each update with its date', () => {
    assert.strictEqual(
      convert([
        '{% updates format="full" %}',
        '{% update date="2026-11-16" tags="feature" %}',
        '## November release',
        '',
        'New editors.',
        '{% endupdate %}',
        '{% endupdates %}',
      ]),
      ['<p class="update-date"><time datetime="2026-11-16">2026-11-16</time></p>', '', '## November release', '', 'New editors.'].join('\n'),
    )
  })

  it('should turn a YouTube watch embed into a privacy-enhanced iframe', () => {
    assert.strictEqual(
      convert(['{% embed url="https://www.youtube.com/watch?v=XN8TcivLJu4" %}']),
      '<iframe class="video" src="https://www.youtube-nocookie.com/embed/XN8TcivLJu4" title="YouTube video" allowfullscreen loading="lazy"></iframe>',
    )
  })

  it('should turn a youtu.be embed into a privacy-enhanced iframe', () => {
    assert.strictEqual(
      convert(['{% embed url="https://youtu.be/43qNPscck5E" %}', '{% endembed %}']),
      '<iframe class="video" src="https://www.youtube-nocookie.com/embed/43qNPscck5E" title="YouTube video" allowfullscreen loading="lazy"></iframe>',
    )
  })

  it('should turn a non-YouTube embed into a link card', () => {
    assert.strictEqual(
      convert(['{% embed url="https://example.com/demo" %}', '{% endembed %}']),
      '<a class="card" href="https://example.com/demo"></a>',
    )
  })

  it('should turn a file into a download link named after the file', () => {
    assert.strictEqual(
      convert(['{% file src="../../.gitbook/assets/emarketeer-tracker.tpl" %}', '{% endfile %}']),
      '<a class="file" href="../../.gitbook/assets/emarketeer-tracker.tpl" download>emarketeer-tracker.tpl</a>',
    )
  })

  it('should keep a hint inside a step inside the step', () => {
    assert.strictEqual(
      convert([
        '{% stepper %}',
        '{% step %}',
        '### Name it',
        '',
        '{% hint style="info" %}',
        'Names are internal.',
        '{% endhint %}',
        '{% endstep %}',
        '{% endstepper %}',
      ]),
      [
        '<ol class="steps" role="list">',
        '',
        '<li class="step">',
        '',
        '### Name it',
        '',
        '<aside class="hint hint-info">',
        '',
        'Names are internal.',
        '',
        '</aside>',
        '',
        '</li>',
        '',
        '</ol>',
      ].join('\n'),
    )
  })

  it('should put a blank line between a step tag and a heading that follows it directly', () => {
    const output = convert([
      '{% stepper %}',
      '{% step %}',
      'Done.',
      '{% endstep %}',
      '{% step %}',
      '### Enable the integration in eMarketeer',
      '{% endstep %}',
      '{% endstepper %}',
    ])
    assert.match(output, /<li class="step">\n\n### Enable the integration in eMarketeer\n\n<\/li>/)
  })

  it('should put a blank line between a closing tag and text that follows it directly', () => {
    assert.strictEqual(
      convert(['{% hint style="info" %}', 'Hint.', '{% endhint %}', 'After.']),
      ['<aside class="hint hint-info">', '', 'Hint.', '', '</aside>', '', 'After.'].join('\n'),
    )
  })

  it('should drop the icon attribute of a hint', () => {
    assert.strictEqual(
      convert(['{% hint style="success" icon="circle-plus" %}', 'New.', '{% endhint %}']),
      ['<aside class="hint hint-success">', '', 'New.', '', '</aside>'].join('\n'),
    )
  })

  it('should sort updates newest first', () => {
    assert.strictEqual(
      convert([
        '{% updates format="full" %}',
        '{% update date="2026-01-26" tags="fix" %}',
        'January.',
        '{% endupdate %}',
        '',
        '{% update date="2026-11-16" tags="fix" %}',
        'November.',
        '{% endupdate %}',
        '{% endupdates %}',
      ]),
      ['<p class="update-date"><time datetime="2026-11-16">2026-11-16</time></p>', '', 'November.', '', '<p class="update-date"><time datetime="2026-01-26">2026-01-26</time></p>', '', 'January.'].join('\n'),
    )
  })

  it('should convert an embed and a file with and without an end tag', () => {
    assert.strictEqual(
      convert([
        '{% embed url="https://www.youtube.com/watch?v=VKRJyNYDmbg" %}',
        '{% endembed %}',
        '{% embed url="https://www.youtube.com/watch?v=XN8TcivLJu4" %}',
        '',
        '{% file src="a/one.tpl" %}',
        '{% endfile %}',
        '{% file src="a/two.png" %}',
        'Text.',
      ]),
      [
        '<iframe class="video" src="https://www.youtube-nocookie.com/embed/VKRJyNYDmbg" title="YouTube video" allowfullscreen loading="lazy"></iframe>',
        '',
        '<iframe class="video" src="https://www.youtube-nocookie.com/embed/XN8TcivLJu4" title="YouTube video" allowfullscreen loading="lazy"></iframe>',
        '',
        '<a class="file" href="a/one.tpl" download>one.tpl</a>',
        '',
        '<a class="file" href="a/two.png" download>two.png</a>',
        '',
        'Text.',
      ].join('\n'),
    )
  })

  it('should remove the GitBook Ask buttons and keep the other HTML', () => {
    assert.strictEqual(
      convert([
        '<button type="button" class="button primary" data-action="ask" data-icon="gitbook-assistant">Ask a question…</button>',
        '',
        '<button type="button" class="button secondary" data-action="ask" data-query="Why did my email bounce?" data-icon="envelope">Why did my email bounce?</button><button type="button" class="button secondary" data-action="ask" data-query="How do I track website visits?" data-icon="globe">How do I track website visits?</button><button type="button" class="button secondary" data-action="ask" data-query="How do I create automated flows?" data-icon="chart-diagram">How do I create automated flows?</button><button type="button" class="button secondary" data-action="ask" data-query="How do I import contacts?" data-icon="address-book">How do I import contacts?</button>',
        '<a href="changelog.md" class="button secondary">View product updates</a>',
      ]),
      ['', '', '', '<a href="changelog.md" class="button secondary">View product updates</a>'].join('\n'),
    )
  })

  it('should leave tags inside fenced code blocks unchanged', () => {
    const markdown = ['```liquid', '{% hint style="info" %}', '{% tabs-x %}', '```', '', '~~~', '{% stepper %}', '~~~'].join('\n')
    assert.strictEqual(convertGitbook(markdown, FILE), markdown)
  })

  it('should throw with the file and line for an unknown tag', () => {
    assert.throws(() => convert(['# Title', '', '{% tabs-x %}']), /guides\/x\.md line 3: unknown GitBook tag \{% tabs-x %\}/)
  })

  it('should throw with the file and line for an unclosed block tag', () => {
    assert.throws(
      () => convert(['# Title', '{% hint style="info" %}', 'Never closed.']),
      /guides\/x\.md line 2: unclosed GitBook tag \{% hint %\}/,
    )
  })

  it('should throw with the file and line for a single-quoted required attribute', () => {
    assert.throws(
      () => convert(['# Title', "{% hint style='info' %}", 'Text.', '{% endhint %}']),
      /guides\/x\.md line 2: missing style on GitBook tag \{% hint %\}/,
    )
  })

  it('should throw with the file and line for a missing required attribute', () => {
    assert.throws(
      () => convert(['{% updates %}', '{% update tags="fix" %}', 'Body.', '{% endupdate %}', '{% endupdates %}']),
      /guides\/x\.md line 2: missing date on GitBook tag \{% update %\}/,
    )
  })

  it('should not treat a line with inline triple backticks as a fence', () => {
    assert.throws(() => convert(['```inline``` text', '{% tabs-x %}']), /guides\/x\.md line 2: unknown GitBook tag \{% tabs-x %\}/)
  })

  it('should throw with the file and line for an indented tag', () => {
    assert.throws(
      () => convert(['1. First', '   {% hint style="info" %}', '   Text.', '   {% endhint %}']),
      /guides\/x\.md line 2: indented GitBook tag \{% hint %\} is not supported/,
    )
  })

  it('should throw with the file and line for an unknown hint style', () => {
    assert.throws(
      () => convert(['# Title', '{% hint style="tip" %}', 'Text.', '{% endhint %}']),
      /guides\/x\.md line 2: unknown hint style "tip"/,
    )
  })

  it('should throw with the file and line for content between steps', () => {
    assert.throws(
      () => convert(['{% stepper %}', '{% step %}', 'One.', '{% endstep %}', 'Loose text.', '{% endstepper %}']),
      /guides\/x\.md line 5: unexpected content inside GitBook tag \{% stepper %\}/,
    )
  })

  it('should throw with the file and line for a stray end tag', () => {
    assert.throws(() => convert(['Text.', '{% endhint %}']), /guides\/x\.md line 2: unexpected GitBook tag \{% endhint %\}/)
  })

  it('should throw with the file and line for a step outside a stepper', () => {
    assert.throws(() => convert(['{% step %}', 'One.', '{% endstep %}']), /guides\/x\.md line 1: unexpected GitBook tag \{% step %\}/)
  })

  it('should change nothing when run on its own output', () => {
    const once = convert([
      '# Every tag',
      '<button type="button" data-action="ask">Ask</button>',
      '{% columns %}',
      '{% column %}',
      '{% content-ref url="a.md" %}',
      'a.md',
      '{% endcontent-ref %}',
      '{% endcolumn %}',
      '{% endcolumns %}',
      '{% stepper %}',
      '{% step %}',
      '### Do it',
      '{% hint style="info" icon="sparkles" %}',
      'Careful.',
      '{% endhint %}',
      '{% endstep %}',
      '{% endstepper %}',
      '{% tabs %}',
      '{% tab title="One" %}',
      'Tab body.',
      '{% endtab %}',
      '{% endtabs %}',
      '{% updates format="full" %}',
      '{% update date="2026-01-01" %}',
      'Body.',
      '{% endupdate %}',
      '{% endupdates %}',
      '{% embed url="https://youtu.be/abc" %}',
      '{% embed url="https://example.com" %}',
      '{% endembed %}',
      '{% file src="b.png" %}',
      '```',
      '{% hint style="info" %}',
      '```',
    ])
    assert.strictEqual(
      once,
      [
        '# Every tag',
        '',
        '<div class="columns">',
        '',
        '<div>',
        '',
        '<a class="card" href="a.md"></a>',
        '',
        '</div>',
        '',
        '</div>',
        '',
        '<ol class="steps" role="list">',
        '',
        '<li class="step">',
        '',
        '### Do it',
        '',
        '<aside class="hint hint-info">',
        '',
        'Careful.',
        '',
        '</aside>',
        '',
        '</li>',
        '',
        '</ol>',
        '',
        '#### One',
        '',
        'Tab body.',
        '',
        '<p class="update-date"><time datetime="2026-01-01">2026-01-01</time></p>',
        '',
        'Body.',
        '',
        '<iframe class="video" src="https://www.youtube-nocookie.com/embed/abc" title="YouTube video" allowfullscreen loading="lazy"></iframe>',
        '',
        '<a class="card" href="https://example.com"></a>',
        '',
        '<a class="file" href="b.png" download>b.png</a>',
        '',
        '```',
        '{% hint style="info" %}',
        '```',
      ].join('\n'),
    )
    assert.strictEqual(convertGitbook(once, FILE), once)
  })

  it('should count lines from the top of the file, frontmatter included', () => {
    assert.throws(
      () => convert(['---', 'description: How to send.', 'layout: default', '---', '', '{% tabs-x %}']),
      /guides\/x\.md line 6: unknown GitBook tag \{% tabs-x %\}/,
    )
  })

  it('should keep the frontmatter unchanged', () => {
    assert.strictEqual(
      convert(['---', 'description: How to send.', '---', '{% hint style="info" %}', 'Hint.', '{% endhint %}']),
      ['---', 'description: How to send.', '---', '', '<aside class="hint hint-info">', '', 'Hint.', '', '</aside>'].join('\n'),
    )
  })

  it('should throw with the file and line for an empty required attribute', () => {
    assert.throws(() => convert(['{% content-ref url="" %}', '{% endcontent-ref %}']), /guides\/x\.md line 1: missing url on GitBook tag \{% content-ref %\}/)
    assert.throws(() => convert(['{% embed url="" %}']), /guides\/x\.md line 1: missing url on GitBook tag \{% embed %\}/)
    assert.throws(() => convert(['{% file src="" %}']), /guides\/x\.md line 1: missing src on GitBook tag \{% file %\}/)
    assert.throws(() => convert(['{% hint style="" %}', 'Text.', '{% endhint %}']), /guides\/x\.md line 1: missing style on GitBook tag \{% hint %\}/)
    assert.throws(
      () => convert(['{% tabs %}', '{% tab title="" %}', 'Body.', '{% endtab %}', '{% endtabs %}']),
      /guides\/x\.md line 2: missing title on GitBook tag \{% tab %\}/,
    )
    assert.throws(
      () => convert(['{% updates %}', '{% update date="" %}', 'Body.', '{% endupdate %}', '{% endupdates %}']),
      /guides\/x\.md line 2: missing date on GitBook tag \{% update %\}/,
    )
  })

  it('should throw with the file and line for an update date that is not YYYY-MM-DD', () => {
    assert.throws(
      () => convert(['{% updates %}', '{% update date="16 Nov 2026" %}', 'Body.', '{% endupdate %}', '{% endupdates %}']),
      /guides\/x\.md line 2: date "16 Nov 2026" is not YYYY-MM-DD/,
    )
  })

  it('should turn a content-ref to a folder with the folder name as text into a card', () => {
    assert.strictEqual(
      convert(['{% content-ref url="contacts-lists/" %}', 'contacts-lists', '{% endcontent-ref %}']),
      '<a class="card" href="contacts-lists/"></a>',
    )
  })

  it('should accept the link target as content-ref text in each form GitBook writes', () => {
    assert.strictEqual(
      convert([
        '{% content-ref url="../forms/a.md" %}',
        '../forms/a.md',
        '{% endcontent-ref %}',
        '{% content-ref url="b.md" %}',
        '[b.md](b.md)',
        '{% endcontent-ref %}',
        '{% content-ref url="c.md" %}',
        '{% endcontent-ref %}',
      ]),
      ['<a class="card" href="../forms/a.md"></a>', '', '<a class="card" href="b.md"></a>', '', '<a class="card" href="c.md"></a>'].join('\n'),
    )
  })

  it('should throw with the file and line for content-ref text that is not the link target', () => {
    assert.throws(
      () => convert(['# Title', '{% content-ref url="create-new-campaign.md" %}', 'Read about campaigns', '{% endcontent-ref %}']),
      /guides\/x\.md line 2: content-ref text "Read about campaigns" is not the link target/,
    )
  })

  it('should turn an embed on a look-alike YouTube host into a link card', () => {
    assert.strictEqual(convert(['{% embed url="https://notyoutube.com/watch?v=x" %}']), '<a class="card" href="https://notyoutube.com/watch?v=x"></a>')
  })

  it('should keep the start time of a YouTube embed', () => {
    assert.strictEqual(
      convert(['{% embed url="https://youtu.be/43qNPscck5E?t=30" %}', '{% embed url="https://m.youtube.com/watch?v=XN8TcivLJu4&start=45s" %}']),
      [
        '<iframe class="video" src="https://www.youtube-nocookie.com/embed/43qNPscck5E?start=30" title="YouTube video" allowfullscreen loading="lazy"></iframe>',
        '',
        '<iframe class="video" src="https://www.youtube-nocookie.com/embed/XN8TcivLJu4?start=45" title="YouTube video" allowfullscreen loading="lazy"></iframe>',
      ].join('\n'),
    )
  })

  it('should throw with the file and line for a YouTube embed without a video id', () => {
    assert.throws(
      () => convert(['# Title', '{% embed url="https://www.youtube.com/playlist?list=PL123" %}']),
      /guides\/x\.md line 2: cannot read the YouTube video id from https:\/\/www\.youtube\.com\/playlist\?list=PL123/,
    )
  })

  it('should throw with the file and line for a column outside columns', () => {
    assert.throws(() => convert(['{% column %}', 'Left', '{% endcolumn %}']), /guides\/x\.md line 1: unexpected GitBook tag \{% column %\}/)
  })

  it('should throw with the file and line for text between columns', () => {
    assert.throws(
      () => convert(['{% columns %}', 'Loose text.', '{% column %}', 'Left', '{% endcolumn %}', '{% endcolumns %}']),
      /guides\/x\.md line 2: unexpected content inside GitBook tag \{% columns %\}/,
    )
  })

  it('should throw with the file and line for an empty container tag', () => {
    assert.throws(() => convert(['# Title', '{% stepper %}', '', '{% endstepper %}']), /guides\/x\.md line 2: empty GitBook tag \{% stepper %\}/)
    assert.throws(() => convert(['{% tabs %}', '{% endtabs %}']), /guides\/x\.md line 1: empty GitBook tag \{% tabs %\}/)
    assert.throws(() => convert(['{% updates format="full" %}', '{% endupdates %}']), /guides\/x\.md line 1: empty GitBook tag \{% updates %\}/)
    assert.throws(() => convert(['{% columns %}', '{% endcolumns %}']), /guides\/x\.md line 1: empty GitBook tag \{% columns %\}/)
  })

  it('should throw with the file and line for text on the same line as a tag', () => {
    assert.throws(
      () => convert(['# Title', '{% hint style="info" %} Careful.', '{% endhint %}']),
      /guides\/x\.md line 2: text before or after GitBook tag \{% hint %\} is not allowed/,
    )
  })

  it('should not let a tag reach past its own closing delimiter', () => {
    assert.throws(
      () => convert(['{% file src="one.tpl" %} Text that must not disappear {% unknown %}']),
      /guides\/x\.md line 1: text before or after GitBook tag \{% file %\} is not allowed/,
    )
  })

  it('should keep a percent sign inside an attribute value', () => {
    assert.equal(convert(['{% file src="a%20b.tpl" %}']), '<a class="file" href="a%20b.tpl" download>a%20b.tpl</a>')
  })
})
