// Saves the messaging device token to the datastore.
export function saveMessagingDeviceToken() {
  firebase.messaging().getToken({vapidKey: "BMIGY3uPL70dBXyIaFR5QuDZ9M9xPsnxzYXsfn2oCOZXO9JlYB7oaZn66MDQCHl_ky0eJj--GTWXqp7CXUjOu7k"}).then(function(currentToken) {
    if (currentToken) {
      console.log('Got FCM device token:', currentToken);
      // Saving the Device Token to the datastore.
      firebase.firestore().collection('fcmTokens').doc(currentToken)
        .set({uid: firebase.auth().currentUser.uid});
    } else {
      // Need to request permissions to show notifications.
      requestNotificationsPermissions();
    }
  }).catch(function(error){
    console.error('Unable to get messaging token.', error);
  });
}

// Requests permissions to show notifications.
function requestNotificationsPermissions() {
  console.log('Requesting notifications permission...');
  firebase.messaging().requestPermission().then(function() {
    // Notification permission granted.
    saveMessagingDeviceToken();
  }).catch(function(error) {
    console.error('Unable to get permission to notify.', error);
  });
}
