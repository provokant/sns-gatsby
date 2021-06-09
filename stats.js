const commits = [
  [1623176686, "add correct banner image for open graph (63m)"],
  [1623172868, "fix imports (2m)"],
  [1623172837, "refactor magenta color and fix tailwind config (28m)"],
  [1623172795, "split open call and add feature toggle for custom form (89m)"],
  [1623172741, "fix missing key (15m)"],
  [1623172711, "fix cs (1m)"],
  [1623172696, "add title to insta posts (18m)"],
  [1623172650, "fix form url (3m)"],
  [1623172632, "switch to jit mode (4m)"],
  [1623088623, "add anchor links (4m)"],
  [1623088443, "responsive adjustments (36m)"],
  [1623081873, "add imprint route (24m)"],
  [1623081113, "adjust form (23m)"],
  [1623078989, "adjust colors (3m)"],
  [1623078579, "update favicon (4m)"],
  [1623078371, "change header image and colors (19m)"],
  [1623075764, "add site description and rearrange claims (47m)"],
  [1623020584, "add static folder and cname file (18m)"],
  [1623019718, "add feature toggle for cta's and change header logo (48m)"],
  [1623002855, "fix image size fit (8m)"],
  [1623002837, "extract title from insta post (14m)"],
  [1623002789, "reduce claims to one single text field (17m)"],
  [1622854793, "add seo, inject posts, fix errors (33m)"],
  [1622852722, "add global styles (1h)"],
  [1622849374, "style 404 page (12m)"],
  [1622847008, "refactor index page and split into smaller components (67m)"],
  [1622842997, "re-add imprint, insta posts and form (3h)"],
  [1622729169, "implement tailwind hero and navigation (2h)"],
  [1622674616, "implement tailwindcss (2h)"],
  [1622665530, "add imprint styles (7m)"],
  [1622665127, "clean html and inject form urls from config (38m)"],
  [1622540701, "fix redundant exports (2m)"],
  [1622540575, "add gh-pages and google form (48m)"],
  [1622494553, "scrape insta posts (2h)"],
  [1622494510, "add imprint (24m)"],
  [1622485373, "ignore ide files (3m)"],
  [1622485332, "add instagram plugin (2h)"],
  [1622485272, "add git ignore (1m)"],
  [1622481870, "Initial commit from gatsby"]
]

const stats = commits
  .map(([timestamp, message]) => {
    const [,duration] = message.match(/\((\d+[hms])/) ?? [,"4m"]
    const [value, unit] = [
      duration.match(/\d*/)[0],
      duration.slice(-1),
    ]
    const unitFactorMap = (unit) => {
      switch(unit) {
        case "h":
          return 60
        case "s":
          return 1/60
        case "ms":
          return 1/60/10
        default:
          return 1
      }
    }

    return [timestamp, value * unitFactorMap(unit)]
  })

console.log(stats)
console.log("")
console.log("In total:", stats.reduce((t1, [,t2]) => parseInt(t1)+parseInt(t2)))

process.exit()

