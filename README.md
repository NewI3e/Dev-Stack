# devstack

devstack is a simple react project where i can see different technologies and add them to my own tech stack. i made this project to practice some basic react concepts and understand how everything works

## technologies i used

- react
- typescript
- vite
- html
- css

## features

- view different technologies
- add technologies to my stack
- remove technologies from my stack
- show a message when the stack is empty

---

## react questions & answers

### 1. what is jsx, and why is it used in react?

jsx is a way to write html like code inside javascript or typescript it makes the react code more easy to read and write.

### 2. what is the difference between props and state?

props are used to pass data from a parent component to a child component.

state is used to store data inside a component the state can change when the user do something on the website.

### 3. what does the usestate hook do, and where did you use it in this project?

usestate is used to store and update data in a react component

in this project i used usestate to store the technologies that i add to my stack.

### 4. what does the useeffect hook do, and why did you need it to load the json data?

useeffect is used to run some code after the component is loaded or updated.

i used useeffect to load the json data when the website starts so i can show the technology list.

### 5. why does every item in a .map() list need a unique key prop?

react needs a unique key for every item in a list. it helps react know which item is changed

