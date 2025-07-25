function groupByCountry(users) {

    return users.reduce((groups, user) => {
        const country = user.country

        if (!groups[country]) {
            groups[country] = []
        }
        groups[country].push(user)
        return groups
    }, {})
}

const users = [
    { name: "Alice", country: "USA" },
    { name: "Bob", country: "UK" },
    { name: "Charlie", country: "USA" },
    { name: "David", country: "UK" },
    { name: "Eve", country: "Canada" }
]

console.log(groupByCountry(users))

// Group Array Elements by Property. Group an array of objects by a property (e.g., group users by country).