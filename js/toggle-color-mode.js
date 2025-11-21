function toggleColorMode() {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
  document.documentElement.setAttribute("data-color-mode", colorScheme)

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      document.documentElement.setAttribute(
        "data-color-mode",
        e.matches ? "dark" : "light"
      )
    })
}

toggleColorMode()
