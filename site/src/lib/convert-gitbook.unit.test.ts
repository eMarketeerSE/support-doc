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

  it('should turn a stepper into numbered step divs', () => {
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
        '<div class="steps">',
        '',
        '<div class="step">',
        '',
        '### Step 1: Open Campaigns',
        '',
        'Pick a folder.',
        '',
        '</div>',
        '',
        '<div class="step">',
        '',
        '### Step 2: Click \\[New Campaign]',
        '',
        '</div>',
        '',
        '</div>',
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

  it('should turn updates into a dated heading per update', () => {
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
      ['### 2026-11-16', '', '## November release', '', 'New editors.'].join('\n'),
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

  it('should number the first heading of each step within its stepper', () => {
    const output = convert([
      '{% stepper %}',
      '{% step %}',
      '### First',
      '',
      '### Second heading in the first step',
      '{% endstep %}',
      '{% step %}',
      '### Second',
      '{% endstep %}',
      '{% endstepper %}',
      '',
      '{% stepper %}',
      '{% step %}',
      '## Again',
      '{% endstep %}',
      '{% endstepper %}',
    ])
    assert.deepStrictEqual(
      output.split('\n').filter((line) => line.startsWith('#')),
      ['### Step 1: First', '### Second heading in the first step', '### Step 2: Second', '## Step 1: Again'],
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
        '<div class="steps">',
        '',
        '<div class="step">',
        '',
        '### Step 1: Name it',
        '',
        '<aside class="hint hint-info">',
        '',
        'Names are internal.',
        '',
        '</aside>',
        '',
        '</div>',
        '',
        '</div>',
      ].join('\n'),
    )
  })

  it('should put a blank line between a step tag and a heading that follows it directly', () => {
    const output = convert(['{% stepper %}', '{% step %}', 'Done.', '{% endstep %}', '{% step %}', '### Enable', '{% endstep %}', '{% endstepper %}'])
    assert.match(output, /<div class="step">\n\n### Step 2: Enable\n\n<\/div>/)
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
      ['### 2026-11-16', '', 'November.', '', '### 2026-01-26', '', 'January.'].join('\n'),
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
    assert.strictEqual(convertGitbook(once, FILE), once)
  })
})
