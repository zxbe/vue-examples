type Component = {
  constructor(name: string): Component;

  load(url: string);
};

function VueLoader(url: string, name: string): Promise<any>;

export default VueLoader;
