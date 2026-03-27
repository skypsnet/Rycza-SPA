$files = Get-ChildItem -Path src/js -Recurse -Filter *.vue
foreach ($f in $files) {
    if ($f.Name -eq 'App.vue') { continue }
    $text = [IO.File]::ReadAllText($f.FullName)
    $text = $text -replace '<ClientOnly>', ''
    $text = $text -replace '</ClientOnly>', ''
    [IO.File]::WriteAllText($f.FullName, $text)
}
