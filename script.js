document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
        function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    console.log("Permission result:", permission);
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      getToken();  // Function to get the token
    } else {
      console.log('Notification permission denied.');
    }
  }).catch((error) => {
    console.error('Error requesting permission:', error);
  });
}

// Call this function to request permission
requestPermission();
    });

    // Fade-in effect on scroll
    const carItems = document.querySelectorAll('.car-item');
    const options = {
        threshold: 0.1,
    };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    carItems.forEach(item => {
        observer.observe(item);
    });
});
<script>
  const messaging = firebase.messaging();

  // Request permission to send notifications
  function requestPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken();
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }

  // Get the device token
  function getToken() {
    messaging.getToken({ vapidKey: 'YOUR_VAPID_KEY' }).then((currentToken) => {
      if (currentToken) {
        console.log('Token retrieved:', currentToken);
        // Send the token to your server and save it to send notifications later
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }

  // Handle incoming messages
  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // Display notification
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon
    };
    new Notification(notificationTitle, notificationOptions);
  });

  // Call this function when your page loads
  requestPermission();
</script>
navigator.serviceWorker.register('firebase-messaging-sw.js')
function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      getToken();
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
}

// Call this function on page load
requestPermission();
