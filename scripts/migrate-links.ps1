# migrate-links.ps1
# Replaces all support.emarketeer.com navigation links with relative .md paths,
# and strips the link wrapper from clickable images that point to wp-content/uploads.
# Run once from the repo root. Safe to re-run (idempotent after first pass).

$repoRoot = "C:\Users\sebas\OneDrive\Dokument\Claude\Projects\support-doc"

# ---------------------------------------------------------------------------
# URL mapping: path after domain (no leading/trailing slash) => repo-relative file path
# ---------------------------------------------------------------------------
$map = @{
    # knowledgebase slugs
    "knowledgebase/about-email-bounces"                                           = "knowledge-base/email-deliverability/about-email-bounces.md"
    "knowledgebase/advanced-event-qr-code"                                        = "knowledge-base/forms/advanced-event-qr-code.md"
    "knowledgebase/authorize-email-domain"                                        = "knowledge-base/email-deliverability/authorize-email-domain.md"
    "knowledgebase/basics-creating-email"                                         = "knowledge-base/getting-started/basics-creating-email.md"
    "knowledgebase/basics-creating-form"                                          = "knowledge-base/getting-started/basics-creating-form.md"
    "knowledgebase/basics-creating-sms"                                           = "knowledge-base/getting-started/basics-creating-sms.md"
    "knowledgebase/basics-send-email"                                             = "knowledge-base/getting-started/basics-send-email.md"
    "knowledgebase/bulk-actions-tool"                                             = "knowledge-base/contacts-lists/bulk-actions-tool.md"
    "knowledgebase/campaign-contacts"                                             = "knowledge-base/campaigns/campaign-contacts.md"
    "knowledgebase/checklist-explained"                                           = "knowledge-base/reports/checklist-explained.md"
    "knowledgebase/configuring-reminder-email"                                    = "knowledge-base/email-content/configuring-reminder-email.md"
    "knowledgebase/create-new-campaign"                                           = "knowledge-base/getting-started/create-new-campaign.md"
    "knowledgebase/creating-first-webpage"                                        = "knowledge-base/developer-advanced/creating-first-webpage.md"
    "knowledgebase/default-score-rules-in-emarketeer"                            = "knowledge-base/lead-board-scoring/default-score-rules-in-emarketeer.md"
    "knowledgebase/email-open"                                                    = "knowledge-base/reports/email-open.md"
    "knowledgebase/email-report-explained"                                        = "knowledge-base/reports/email-report-explained.md"
    "knowledgebase/email-templates"                                               = "knowledge-base/email-content/email-templates.md"
    "knowledgebase/email_health_dashboard"                                        = "knowledge-base/email-deliverability/emailhealthdashboard.md"
    "knowledgebase/emarketeer-gdpr-overview"                                      = "knowledge-base/gdpr-consent/emarketeer-gdpr-overview.md"
    "knowledgebase/gdpr-and-what-it-means-for-emarketeer-users"                  = "knowledge-base/gdpr-consent/gdpr-and-what-it-means-for-emarketeer-users.md"
    "knowledgebase/gdpr-general-data-protection-regulation"                      = "knowledge-base/gdpr-consent/gdpr-general-data-protection-regulation.md"
    "knowledgebase/get-started-leads"                                             = "knowledge-base/getting-started/get-started-leads.md"
    "knowledgebase/how-does-consent-work"                                         = "knowledge-base/gdpr-consent/how-does-consent-work.md"
    "knowledgebase/how-lead-scoring-works-in-emarketeer"                         = "knowledge-base/lead-board-scoring/how-lead-scoring-works-in-emarketeer.md"
    "knowledgebase/how-to-set-up-your-lead-scoring-model-and-lead-scoring-mistakes" = "knowledge-base/lead-board-scoring/how-to-set-up-your-lead-scoring-model-and-lead-scoring-mistakes.md"
    "knowledgebase/how-to-use-campaign-fields-in-emarketeer"                     = "knowledge-base/campaigns/how-to-use-campaign-fields-in-emarketeer.md"
    "knowledgebase/how-to-use-emarketeer-campaign-reports"                       = "knowledge-base/reports/how-to-use-emarketeer-campaign-reports.md"
    "knowledgebase/how-to-use-the-image-editor-in-emarketeer"                   = "knowledge-base/email-content/how-to-use-the-image-editor-in-emarketeer.md"
    "knowledgebase/how-will-emarketeer-work-with-superoffice-under-gdpr"        = "knowledge-base/gdpr-consent/how-will-emarketeer-work-with-superoffice-under-gdpr.md"
    "knowledgebase/import-contacts-from-excel"                                   = "knowledge-base/contacts-lists/import-contacts-from-excel.md"
    "knowledgebase/is-there-an-emarketeer-gdpr-roadmap"                         = "knowledge-base/gdpr-consent/is-there-an-emarketeer-gdpr-roadmap.md"
    "knowledgebase/lead-board-and-superoffice"                                   = "knowledge-base/lead-board-scoring/lead-board-and-superoffice.md"
    "knowledgebase/lead-streams"                                                  = "knowledge-base/lead-board-scoring/lead-streams.md"
    "knowledgebase/maximizing-email-marketing-success-best-practices-and-pitfalls-to-avoid" = "knowledge-base/reports/maximizing-email-marketing-success-best-practices-and-pitfalls-to-avoid.md"
    "knowledgebase/new-contact-list"                                              = "knowledge-base/getting-started/new-contact-list.md"
    "knowledgebase/sales-teams"                                                   = "knowledge-base/lead-board-scoring/sales-teams.md"
    "knowledgebase/sales-users"                                                   = "knowledge-base/lead-board-scoring/sales-users.md"
    "knowledgebase/the-lead-board"                                                = "knowledge-base/lead-board-scoring/the-lead-board.md"
    "knowledgebase/undeliverable-contacts-email-checklist"                       = "knowledge-base/email-deliverability/undeliverable-contacts-email-checklist.md"
    "knowledgebase/understanding-em-urls"                                         = "knowledge-base/account-admin/understanding-em-urls.md"
    "knowledgebase/what-should-i-do-before-gdpr"                                 = "knowledge-base/gdpr-consent/what-should-i-do-before-gdpr.md"
    "knowledgebase/where-is-emarketeer-data-stored-geographically"              = "knowledge-base/account-admin/where-is-emarketeer-data-stored-geographically.md"
    "knowledgebase/which-new-features-will-emarketeer-introduce-to-help-with-gdpr" = "knowledge-base/gdpr-consent/which-new-features-will-emarketeer-introduce-to-help-with-gdpr.md"
    "knowledgebase/why-authorize-email-domain"                                   = "knowledge-base/email-deliverability/why-authorize-email-domain.md"
    # knowledgebase/web-monitor => NO MATCH, intentionally omitted

    # documentation paths
    "documentation/actions-performed-during-set-up"                                                          = "documentation/superoffice/actions-performed-during-set-up.md"
    "documentation/custom-email-domain"                                                                       = "documentation/custom-domain/custom-email-domain.md"
    "documentation/custom-signals-api"                                                                        = "documentation/apis-developer/custom-signals-api.md"
    "documentation/dynamics/dynamics-features/dynamics-import"                                               = "documentation/dynamics-365/dynamics-import.md"
    "documentation/dynamics/dynamics-features/dynamics-journey-steps"                                        = "integrations/dynamics/dynamics-journey-steps/README.md"
    "documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-contact-to-marketing-list" = "integrations/dynamics/dynamics-journey-steps/dynamics-add-contact-to-marketing-list.md"
    "documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-lead-activity"            = "integrations/dynamics/dynamics-journey-steps/dynamics-add-lead-activity.md"
    "documentation/dynamics/dynamics-features/dynamics-journey-steps/dynamics-add-lead-to-marketing-list"  = "integrations/dynamics/dynamics-journey-steps/dynamics-add-lead-to-marketing-list.md"
    "documentation/dynamics/dynamics-features/dynamics-journey-steps/journey-add-contact-activity"         = "documentation/dynamics-365/journey-add-contact-activity.md"
    "documentation/dynamics/dynamics-features/dynamics-legal-basis-sync"                                    = "documentation/dynamics-365/dynamics-legal-basis-sync.md"
    "documentation/dynamics/dynamics-features/microsoft-dynamics-integration-journey-steps/create-update-lead"    = "integrations/dynamics/dynamics-journey-steps/create-update-lead.md"
    "documentation/dynamics/dynamics-features/microsoft-dynamics-integration-journey-steps/dynamics-add-activity" = "integrations/dynamics/dynamics-journey-steps/dynamics-add-activity.md"
    "documentation/dynamics/dynamics-installation"                                                           = "documentation/dynamics-365/dynamics-installation.md"
    "documentation/exclude-inactive-recipients"                                                              = "documentation/email-sms/exclude-inactive-recipients.md"
    "documentation/facebook-lead-forms"                                                                      = "documentation/lead-forms/facebook-lead-forms.md"
    "documentation/installing-the-web-tracker-script-on-your-website"                                       = "documentation/web-tracker/installing-the-web-tracker-script-on-your-website.md"
    "documentation/journeys/creating-your-first-journey"                                                     = "documentation/journeys/creating-your-first-journey.md"
    "documentation/journeys/journeys-triggering-events"                                                      = "documentation/journeys/journeys-triggering-events.md"
    "documentation/legal/acceptable-use-policy"                                                              = "documentation/legal/acceptable-use-policy.md"
    "documentation/legal/infromation-secirity-policy"                                                        = "documentation/legal/infromation-secirity-policy.md"
    "documentation/legal/privacy-policy"                                                                     = "documentation/legal/privacy-policy.md"
    "documentation/legal/scc"                                                                                = "documentation/legal/scc.md"
    "documentation/legal/terms-of-service"                                                                   = "documentation/legal/terms-of-service.md"
    "documentation/microsoft-dynamics-integration"                                                           = "documentation/dynamics-365/microsoft-dynamics-integration.md"
    "documentation/multi-factor-authentication"                                                              = "documentation/accounts-auth/multi-factor-authentication.md"
    "documentation/publish-a-form"                                                                           = "documentation/forms/publish-a-form.md"
    "documentation/sender-id"                                                                                = "documentation/email-sms/sender-id.md"
    "documentation/sender-id/whitelist-of-countries-supporting-sms-sender-id"                              = "documentation/email-sms/whitelist-of-countries-supporting-sms-sender-id.md"
    # documentation/subscriptions => NO MATCH, intentionally omitted
    "documentation/superoffice-signals"                                                                      = "documentation/superoffice/superoffice-signals.md"
    "documentation/the-form-component"                                                                       = "documentation/forms/the-form-component.md"
    "documentation/the-web-tracker"                                                                          = "documentation/web-tracker/the-web-tracker.md"
    "documentation/transactional-sendouts"                                                                   = "documentation/email-sms/transactional-sendouts.md"

    # one-off patterns
    "upcoming-changes-to-emarketeer-superoffice-consent-sync" = "change-log/upcoming-changes-to-emarketeer-superoffice-consent-sync.md"
    "kb/gdpr"                                                 = "knowledge-base/gdpr-consent/emarketeer-gdpr-overview.md"
    "knowledge-base/email-deliverability/authorize-email-domain" = "knowledge-base/email-deliverability/authorize-email-domain.md"
}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
function Get-RelPath {
    param([string]$fromFile, [string]$toFile)
    $fromNorm  = $fromFile -replace '\\', '/'
    $toNorm    = $toFile   -replace '\\', '/'
    $fromParts = ($fromNorm -split '/') | Select-Object -SkipLast 1
    $toParts   = $toNorm -split '/'
    $common    = 0
    $minLen    = [Math]::Min($fromParts.Count, $toParts.Count)
    while ($common -lt $minLen -and $fromParts[$common] -eq $toParts[$common]) { $common++ }
    $ups       = $fromParts.Count - $common
    $downParts = if ($toParts.Count -gt $common) { $toParts[$common..($toParts.Count - 1)] } else { @() }
    return ("../" * $ups) + ($downParts -join '/')
}

# ---------------------------------------------------------------------------
# Regex patterns
# ---------------------------------------------------------------------------
# Nav link: captures (slug)(optional anchor)
$navPattern = [regex]'https://support\.emarketeer\.com/([^)"''<>\s#]+?)/?(?:#([^)"''<>\s]+))?(?=[)"''<>\s]|$)'

# Image wrapper: [<div...><img...></div>](https://support.emarketeer.com/wp-content/...)
$imgPattern = New-Object System.Text.RegularExpressions.Regex(
    '\[(<div\b[^\]]*>.*?</div>)\]\(https://support\.emarketeer\.com/wp-content/uploads/[^)]+\)',
    [System.Text.RegularExpressions.RegexOptions]::Singleline
)

$utf8NoBOM  = New-Object System.Text.UTF8Encoding $false
$thisScript = "scripts/migrate-links.ps1"

$filesChanged  = 0
$navReplaced   = 0
$imgStripped   = 0
$unmapped      = [System.Collections.Generic.List[string]]::new()

# ---------------------------------------------------------------------------
# Process files
# ---------------------------------------------------------------------------
Get-ChildItem $repoRoot -Recurse -Filter *.md | ForEach-Object {
    $rel = $_.FullName.Substring($repoRoot.Length + 1) -replace '\\', '/'

    # Never modify this script file itself
    if ($rel -eq $thisScript) { return }

    $isSv    = $rel.StartsWith("sv/")
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $original = $content

    # --- Pass 1: nav links ---
    # Collect matches and process in reverse order so string positions stay valid
    $navMatches = $navPattern.Matches($content) | Sort-Object { $_.Index } -Descending
    foreach ($m in $navMatches) {
        $slug   = ($m.Groups[1].Value) -replace '/$', ''
        $anchor = if ($m.Groups[2].Success) { '#' + $m.Groups[2].Value } else { '' }

        if (-not $map.ContainsKey($slug)) {
            $unmapped.Add("  $rel  =>  $($m.Value)")
            continue
        }

        $enTarget = $map[$slug]
        $target   = $enTarget

        if ($isSv) {
            $svCandidate = "sv/$enTarget"
            if (Test-Path (Join-Path $repoRoot $svCandidate)) {
                $target = $svCandidate
            } elseif ($enTarget -like 'documentation/legal/*') {
                # Legal pages are EN-only; leave the link unchanged in SV files
                continue
            }
            # If SV version missing for non-legal: fall back to EN path
        }

        $relPath    = Get-RelPath $rel $target
        $replacement = "$relPath$anchor"
        $content    = $content.Remove($m.Index, $m.Length).Insert($m.Index, $replacement)
        $navReplaced++
    }

    # --- Pass 2: image link wrappers ---
    $imgCount = $imgPattern.Matches($content).Count
    if ($imgCount -gt 0) {
        $content   = $imgPattern.Replace($content, '$1')
        $imgStripped += $imgCount
    }

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($_.FullName, $content, $utf8NoBOM)
        $filesChanged++
        Write-Host "Updated: $rel"
    }
}

# ---------------------------------------------------------------------------
# Report
# ---------------------------------------------------------------------------
Write-Host ""
Write-Host "=== Migration complete ==="
Write-Host "Files changed  : $filesChanged"
Write-Host "Nav links fixed: $navReplaced"
Write-Host "Img wrappers   : $imgStripped"

$uniqueUnmapped = $unmapped | Sort-Object -Unique
if ($uniqueUnmapped.Count -gt 0) {
    Write-Host ""
    Write-Host "=== Unmapped URLs (left unchanged) ==="
    $uniqueUnmapped | ForEach-Object { Write-Host $_ }
}
