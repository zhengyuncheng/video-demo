import videojs from "video.js";

const COMPONENT_NAME = "CustomPlayButton";

// 🔒 防止重复注册（v8 兼容）
if (!videojs.getComponent(COMPONENT_NAME)) {
  const Button = videojs.getComponent("Button");

  class CustomPlayButton extends Button {
    constructor(player: any, options: any) {
      super(player, options);
    }

    handleClick() {
      if (this.player().paused()) {
        this.player().play();
      } else {
        this.player().pause();
      }
    }

    createEl() {
      return videojs.dom.createEl("button", {
        className: "vjs-custom-play-button vjs-control vjs-button",
        innerHTML: `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
          </svg>
        `,
      });
    }
  }

  videojs.registerComponent(COMPONENT_NAME, CustomPlayButton);
  console.log(
    `✅  ${COMPONENT_NAME} registered for Video.js v ${videojs.VERSION}`,
  );
}
