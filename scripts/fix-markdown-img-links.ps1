# fix-markdown-img-links.ps1
# Strips the ](wp-content URL) wrapper from standard [![alt](src)](wp-content URL) patterns,
# leaving just the inner ![alt](src) image. Also cleans up any leftover ](URL) fragments
# from previously broken link wrappers.

$repoRoot = "C:\Users\sebas\OneDrive\Dokument\Claude\Projects\support-doc"

# Pattern 1: [![alt](local-src)](https://support.emarketeer.com/wp-content/...)
# Replace with: ![alt](local-src)
$mdImgLink = New-Object System.Text.RegularExpressions.Regex(
    '\[(!\[[^\]]*\]\([^)]*\))\]\(https://support\.emarketeer\.com/wp-content/uploads/[^)]+\)',
    [System.Text.RegularExpressions.RegexOptions]::Singleline
)

$utf8NoBOM = New-Object System.Text.UTF8Encoding $false
$count = 0

Get-ChildItem $repoRoot -Recurse -Filter *.md | ForEach-Object {
    $rel     = $_.FullName.Substring($repoRoot.Length + 1) -replace '\\', '/'
    if ($rel -like 'scripts/*') { return }
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $orig    = $content

    $content = $mdImgLink.Replace($content, '$1')

    if ($content -ne $orig) {
        [System.IO.File]::WriteAllText($_.FullName, $content, $utf8NoBOM)
        $count++
        Write-Host "Fixed: $rel"
    }
}
Write-Host "Files fixed: $count"
