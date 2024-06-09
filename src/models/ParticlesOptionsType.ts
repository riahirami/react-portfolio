export interface ParticlesOptions {
  fullScreen?: {
    enable: boolean;
    zIndex: number;
  };
  detectRetina?: boolean;
  fpsLimit?: number;
  interactivity?: {
    events?: {
      onClick?: {
        enable: boolean;
        mode: string;
      };
      onDiv?: {
        elementId: string;
        enable: boolean;
        mode: string;
      };
      onHover?: {
        enable: boolean;
        mode: string;
        parallax?: {
          enable: boolean;
          force: number;
          smooth: number;
        };
      };
      resize?: boolean;
    };
    modes?: {
      bubble?: {
        distance: number;
        duration: number;
        opacity: number;
        size: number;
      };
      connect?: {
        distance: number;
        lineLinked?: {
          opacity: number;
        };
        radius: number;
      };
      grab?: {
        distance: number;
        lineLinked?: {
          opacity: number;
        };
      };
      push?: {
        quantity: number;
      };
      remove?: {
        quantity: number;
      };
      repulse?: {
        distance: number;
        duration: number;
      };
    };
  };
  particles?: {
    color?: {
      value: string;
    };
    lineLinked?: {
      blink?: boolean;
      color?: string;
      consent?: boolean;
      distance?: number;
      enable?: boolean;
      opacity?: number;
      width?: number;
    };
    move?: {
      attract?: {
        enable: boolean;
        rotate?: {
          x: number;
          y: number;
        };
      };
      bounce?: boolean;
      direction?: string;
      enable?: boolean;
      outMode?: string;
      random?: boolean;
      speed?: number;
      straight?: boolean;
    };
    number?: {
      density?: {
        enable: boolean;
        area: number;
      };
      limit?: number;
      value?: number;
    };
    opacity?: {
      animation?: {
        enable: boolean;
        minimumValue: number;
        speed: number;
        sync: boolean;
      };
      random?: boolean;
      value?: number;
    };
    rotate?: {
      animation?: {
        enable: boolean;
        speed: number;
        sync: boolean;
      };
      direction?: string;
      random?: boolean;
      value?: number;
    };
    shape?: {
      character?: {
        fill: boolean;
        font: string;
        style: string;
        value: string;
        weight: string;
      };
      image?: {
        src: any;
        width: number;
        height: number;
      }[]; // This may need to be updated based on the TECHNOLOGIES_ICONS structure
      polygon?: {
        sides: number;
      };
      stroke?: {
        color: string;
        width: number;
      };
      type: string;
    };
    size?: {
      animation?: {
        enable: boolean;
        minimumValue: number;
        speed: number;
        sync: boolean;
      };
      random?: boolean;
      value?: number;
    };
  };
  polygon?: {
    draw?: {
      enable: boolean;
      lineColor: string;
      lineWidth: number;
    };
    move?: {
      radius: number;
    };
    scale?: number;
    url?: string;
  };
  background?: {
    image?: string;
    position?: string;
    repeat?: string;
    size?: string;
  };
}
