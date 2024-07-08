Gr8fit-B-Fetch

Gr8fit-B-Fetch is a mobile application designed to track users' fitness activities using Android and iOS activity APIs. 
It monitors various metrics such as users' locations, steps taken, calories burned, and distance walked in real-time. 
The app then securely uploads this data to a Firebase leaderboard, allowing users to track their progress and compete with others.

Features
1. Activity Tracking: Utilizes Android and iOS map APIs to track users' location.
<p align="center">
  <img src="https://github.com/arinze96/gr8fit-b-fetch./assets/92803301/25d8e6ac-714f-46ee-bbfc-b98db4ad41c9" width="300" height="600" alt="Screenshot 1">
  <img src="https://github.com/arinze96/gr8fit-b-fetch./assets/92803301/ba89e3d9-3fae-436f-8b55-d249d77162bc" width="300" height="600" alt="Screenshot 2">
   <img src="https://github.com/arinze96/gr8fit-b-fetch./assets/92803301/9afd8ec1-9fd5-4662-8c74-eb883ead430b" width="300" height="600" alt="Screenshot 2">
</p>

2. Real-time Metrics: Tracks locations, steps, calories burned, and distance walked.

 <p align="center">
 <img src="https://github.com/arinze96/gr8fit-b-fetch./assets/92803301/291af470-cc75-4ba9-88cf-ce8dbba82b4d" width="300" height="600" alt="Screenshot 2">
</p>
 
3. Firebase Integration: Uploads user data securely to Firebase for leaderboard tracking.

4. Competitive Edge: Allows users to compare their fitness progress with others using the app.

   <p align="center">
  <img src="https://github.com/arinze96/gr8fit-b-fetch./assets/92803301/bb869de1-0bcc-4c46-8fa1-b9a726446be9" width="300" height="600" alt="Screenshot 2">
</p>
   
Installation
To install Gr8fit-B-Fetch on your mobile device, follow these steps:


Clone the repository:
git clone https://github.com/your/repository.git.


Navigate to the project directory:
cd Gr8fit-B-Fetch


create a file in the root folder named envdata.ts and add your google api key and firebase credentials in this format

export const envdata = {
  GOOGLE_API_KEY: "...",
  FIREBASE_API_KEY: "...",
  AUTH_DOMAIN: "...",
  PROJECT_ID: "...",
  STORAGE_BUCKET: "...",
  MESSAGING_SENDER_ID: "...",
  FIREBASE_APP_ID: "..."
};


run npm install to install all dependencies
Build and run the app on your devicein Android eulator or ios simulator depending on your platform by running [npm run ios] or [npm run android]




Usage
Once installed, Gr8fit-B-Fetch will start tracking your fitness activities automatically using
your device's sensors and APIs. You can view your progress directly within the app or on the Firebase leaderboard.
