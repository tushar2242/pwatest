import { FrappeApp } from 'frappe-js-sdk';

function getToken() {
    return "0ea4f0ee1c773b5:9d9f23fb7ca1bf0"
}

const frappe = new FrappeApp('http://luckybee.tranqwality.com', {
    useToken: true,
    // Pass a custom function that returns the token as a string - this could be fetched from LocalStorage or auth providers like Firebase, Auth0 etc.
    token: getToken,
    // This can be "Bearer" or "token"
    type: "token"
});
// console.log(getToken())
console.log(frappe)
const auth = frappe.auth();

const db = frappe.db();
// const response = await auth.loginWithUsernamePassword({ username: 'Administrator', password: 'admin' })
// .then((response) => console.log('Logged in'))
// .catch((error) => console.error(error));
// console.log(res)

db.getDoc('Item', 'L11244')
    .then((doc) => console.log(doc))
    .catch((error) => console.error(error));