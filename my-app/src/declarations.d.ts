declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Allow importing plain .jsx/.js React components in a TS project as any
declare module '*.jsx' {
  const value: any;
  export default value;
}
declare module '*.js' {
  const value: any;
  export default value;
}
