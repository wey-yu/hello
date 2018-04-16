// my great test framework 😉

let assert = (what, something) => {
    if(something) {
        console.log("😀", what, "test is ✅")
    } else {
        console.log("😡", what, "test is 💥")
        process.exit(1)
    }
}

assert("bye or good bye", "bye" != "good bye")

assert("42 is 42", 42 == 42)

process.exit(0)
