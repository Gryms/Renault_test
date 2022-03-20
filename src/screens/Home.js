import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Users = [{ id: 1, name: "John Doe", age: 21, gender: "Man" },
{ id: 2, name: "Marc Doe", age: 22, gender: "Man" },
{ id: 3, name: "Jane Doe", age: 22, gender: "Woman" },
{ id: 4, name: "Lisa Kow", age: 32, gender: "Woman" }]


// We want to get every Users' name
const usersName = Users.map((user) => { return (user.name) })

// Now, we want to get every male user

// Since we use a very similar function for getting every men and women, we can make it an helper function.
const genderFilter = (user, gender) => {
  if (typeof gender === "string" && user && user.gender) {
    if (user.gender === gender) {
      return user
    }
  }
}

const men = Users.filter((user) => genderFilter(user, "Man"))

/* We want to get the user with the id === 3
  We can see that it's the third user in the array so his array's index is 2 */
const jane = Users[2]

// If we don't know it's exact position in the array, we can filter to get it and then pop it out of the array.
const janeToo = Users.filter((user) => user.id === 3).pop()

// Now we want to know the number of Women in the user "database"
const nbWomen = Users.filter((user) => genderFilter(user, "Woman")).length

export default class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: Users }
  }
  componentDidMount() {
    const newUsers = this.state.users.map((user) => { return { ...user, firstname: user.name.split(" ")[0] } })
    this.setState({ users: newUsers })
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>All our user's name are:</Text>
          {usersName.map((name) => <Text key={name}>{name}</Text>)}
          <Text>{"\n"}</Text>
          {men.map((man) => <Text key={man.id}>{man.name} is a man</Text>)}
          <Text>{"\n"}</Text>
          <Text>{jane.name} has the third ID: {jane.id}</Text>
          <Text>{janeToo.name} has the third ID again: {janeToo.id}</Text>
          <Text>{"\n"}</Text>
          <Text>There is {nbWomen} women in Users</Text>
          <Text>{"\n"}</Text>
          {this.state.users.map((user) => <Text key={user.id}>User {user.id} firstname is {user.firstname}</Text>)}
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
