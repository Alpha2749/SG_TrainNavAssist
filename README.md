<h3 align="center">SG Train Navigation Assistant</h3>

  <p align="center">
    A simple userscript to assist with navigating trains using shortcuts on SteamGifts!
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>


## About

This project primarily started due to laziness, but also with a little determination sprinkled in... 

My primary method of interaction with Steamgifts is through a trackpad. As such, when there is a large community train, I quickly lose motivation to click through each link. 

This poses a problem, especially when I want to contribute, as I need to be able to get to the last cart in the train to add my contribution. 

So, as mentioned earlier, through my own laziness, and determination to contribute, I decided to make a small userscript to automatically identify the previous/ next links in the cart, and then allow for keyboard shortcuts to be used to navigate through. 

After making a v1 (read as: v0.001) I quickly found that it was a pain to switch between arrow keys and mouse when I wanted to check the screenshots for a game, so I added a shortcut for bringing those up too!

Initially I did consider seeing if I could add this to the ESGST extension, however it is a fairly heavy plugin, and on the device I use (very old chromebook) takes a while to load, and also loads quite late. My idea with making this a separate userscript was to allow it to load very quickly, and be very lightweight as well (which, from my testing I seem to have achieved).

tldr; I hope this addon helps people navigate trains, and (fingers crossed) works well enough for everyone. I hope this can also help anyone with accessibility requirements participate in, and enjoy trains as well!


## Installation
To use this userscript, you will need a userscript extension installed in your browser. This has been developed and tested with TamperMonkey, however any userscript extension should work (i.e. ViolentMonkey, GreaseMonkey, etc).

Follow these steps to install the script using Tampermonkey:

1. **Install Tampermonkey**  
   Tampermonkey is required to run the userscript. Install it from one of the following links based on your browser:
   - [Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  

2. **Open the Script Installation Page**  
   Click on the following link to access the raw script:  
   [Install SG Train Navigation Assistant](https://github.com/Alpha2749/SG_TrainNavAssist/raw/refs/heads/main/sg-train-navigation-assistant.user.js)
   - Alternatively you can navigate to your Tampermonkey dashboard -> Utilities
     - Paste the above URL into the 'Import from URL' section.
     - Click **Install**

4. **Install the Script**  
   - After clicking the link, Tampermonkey will automatically open the script installation screen.
   - Review the script details.
   - Click the **Install** button to add the script.

6. **Updating the Script**  
   Tampermonkey should automatically check for updates periodically (I think I've set it up correctly). To manually check:
   - Open Tampermonkey’s Dashboard.
   - Locate the **SG Train Navigation Assistant** script.
   - Click the **Update** button if an update is available.
   - If this doesn't work, check back on this repo to see if there has been an update.

---

### Troubleshooting
- If the script doesn’t work, ensure:
  - Tampermonkey is enabled in your browser.
  - The script is active and running when on a steamgifts/giveaway ([such as this](https://www.steamgifts.com/giveaway/VggFl/starfield)) domain.
- Check the console for errors (Press `F12` → Console tab).


## Usage

To use this userscript, simply use your arrow keys when in a train, the current available controls are as follows:

- Left Arrow (←) - Go to the previous train cart
- Right Arrow (→) - Go to the next train cart
- Up Arrow (↑) - Open/ Close game screenshots
