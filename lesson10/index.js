// Deep cloning <> shallow-clone: spread
const a = {
    name: 'le nhat duy',
    age: 22,
    profile: {
        school: "University of scient",
        address: 'HCM city'
    }
}

const b = JSON.parse(JSON.stringify(a))
console.log(a)
console.log(b)
