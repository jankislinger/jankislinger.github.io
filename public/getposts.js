const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/content")
let postlist = []

const getPosts = async () => {
  await fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err)
    }
    console.log(files)
    files.forEach((file, i) => {
      let obj = {}
      let post
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        console.log(contents)
        const lines = contents.split("\n")

      })
    })
  })
}

getPosts()
