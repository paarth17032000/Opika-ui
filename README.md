# User App

## How to run the app :
- Open the Opika-ui folder into your code workspace.
- Open terminal and run command `npm i` . This will install the required dependencies.
- After dependencies are added run comman `npm run dev`.

## Dependencies Used :
- @headlessui/react : This is used to introduce beautiful compoents like modal and selectbox (in modal).
- @web3modal/ethers & ethers : This is used for connecting wallet and dispalying balance.
- axios : This is used for making api requests.
- firebase : This is used to interact with firebase.
- react-toastify : To add toast notifications and make app interactive, I have used this.


We have 2 routes: 
## 1. '/' : Landing Page -
- User can see user posts fetched from jsonplaceholder.
- User can click on connect wallet button and see the user wallet balance (on ethereum chain).
- User can click on any user block to go to next page displaying user details.
- User can click on Add Post button which will open a modal where you can add a post which will trigger a api call to firebase and firebase will thus send a notifiation.
  (as using firebase messaging we need an access_token which lasts for an hour I have just made a dummy request)

## 2. '/users/[user]' : User Details Page -
- You can see a user details like email, number.
- You can see user's published posts.

