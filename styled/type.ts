interface BaseProps {
    fontsize?: String;
    color?: string;
    margin?: string;
    padding?: string;
    width?:string,
    height?:string,
  }

interface divProps extends BaseProps {
    backGround?: string;
    display?:string,
    borderRudis?:string,
}

interface buttonProps extends divProps {}

export type baseType =BaseProps
export type divType = divProps
export type buttonType =buttonProps
