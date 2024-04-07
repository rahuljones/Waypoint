# Waypoint
### Navigating confusing buildings made easy
Waypoint makes it easy for visitors to reach locations within buildings, using modern graph techniques to dynamically generate a set of directions representing the shortest route from the entrance to wherever the visitor wants to go.

#### How it works
To set up a Waypoint map for a building’s interior, a proprietor first inputs in the major checkpoints of the building, locations that people might want directions to. Next, the proprietor can input written directions for how to get from one checkpoint to another, along with a rough time estimate for how long it takes. Waypoint prompts the proprietor to keep entering these directions until a sufficient internal map has been built, such that the app can generate a list of directions to get to any of the checkpoints in the building. The proprietor can then post this link, using a QR code for example.

<img src="https://github.com/rahuljones/Waypoint/assets/29411228/2e016511-aba8-4a80-a8ba-718ead64372a" width="353">

<img src="https://github.com/rahuljones/Waypoint/assets/29411228/8256f13d-00d1-4336-8c6c-34a5a29c7f09" width="300">

A visitor can then access this link, choose a destination, and then Waypoint utilizes modern graph techniques to present step-by-step directions for the shortest route to the chosen destination.

<img src="https://github.com/rahuljones/Waypoint/assets/29411228/4e6483e2-b1c7-448a-9bd6-ac69c1a2b817" width="300">

#### Running Waypoint
You can try Waypoint for yourself by downloading the repo, and using `npm start` in the waypoint directory and the backend directory.

#### Tech Stack
Frontend built with React, Javascript, HTML, CSS. Backend built with Express.




