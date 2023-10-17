console.log("Youtube Ad Block Plugin Active");
// onload and on refresh or move to another video

const total_tries = 10;
function adblock() {
  if (window.location.href.includes("youtube.com/watch")) {
    console.debug("Youtube Video Detected !");
    let ad_removed = false;
    let tries = 1;
    try {
      let dialog = document.getElementsByTagName("tp-yt-paper-dialog")[0];
      dialog.style.display = "none";
      ad_removed = true;
    } catch {
      console.debug("Ad not found !");
      let time_rotation = this.setInterval(() => {
        console.debug("Checking for Ads...");
        if (ad_removed == false) {
          if (tries >= total_tries) {
            console.debug("Failed to Remove ad, Aborting !");
            this.clearInterval(time_rotation);
          }
          tries++;

          try {
            let dialog = document.getElementsByTagName("tp-yt-paper-dialog")[0];
            dialog.style.display = "none";
            ad_removed = true;
            console.log("Ad Removed !");
            this.clearInterval(time_rotation);
          } catch {
            ad_removed = false;
          }
        }
      }, 1000);
    }
  }
}

window.addEventListener("popstate", function (e) {
  console.debug(e.target.location.href);
  console.debug("Route Changed !");
  adblock();
});

let old_url = window.location.href;
onload = () => {
  adblock;

  setInterval(() => {
    if (old_url != window.location.href) {
      console.debug("Route Changed !");
      adblock();
    }
    console.debug("Checking for Changes...");
    old_url = window.location.href;
  }, 2000);
};
