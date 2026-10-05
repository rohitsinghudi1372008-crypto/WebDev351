let file = require("fs")

file.writeFile('Secrets.txt', 'Password-1134', (err) => {
    if (err) {
        console.log("Error")
        return
    }

    console.log("File Created")
    file.appendFile('Secrets.txt', "Password-234", (err) => {
        if (err) {
            console.log("Error in Append")
            return
        }

        console.log("Data Update")
        file.readFile('Secrets.txt', 'utf8', (err, data) => {
            if (err) {
                console.log("Error in reading File")
                return
            }

            console.log(data)
            setTimeout(() => {
                file.unlink('Secrets.txt', (err) => {
                    if (err)
                        console.log("Error")
                    else
                        console.log("Delete File")
                })
            }, 4000)
        })
    })
})
