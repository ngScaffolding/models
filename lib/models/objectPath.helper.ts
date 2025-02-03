export class ObjectPathHelper {
  public static get(model: any, path: string) {
    if (!path) {
      return null;
    }
    if (!path.includes('.')) {
      return model[path];
    } else {
      return this.getNode(model, path);
    }
  }
  public static set(model: any, path: string, value: any) {
    if (path) {
      if (!path.includes('.')) {
        model[path] = value;
      } else {
        let prop = this.getNode(model, path);
        prop = value;
      }
    }
  }

  private static getNode(model: any, path: string) {
    const pathNodes = path.split('.');
    let pointer = model;
    pathNodes.forEach(nodeName => {
      if (nodeName.includes('[')) {
        const splitName = nodeName.substring(0, nodeName.indexOf('['));
        const indexNum = Number(nodeName.substring(nodeName.indexOf('[') + 1, nodeName.indexOf(']')));
        const firstPointer = pointer[splitName];
        if(!firstPointer){
          return null;
        }
        pointer = firstPointer[indexNum];
      } else {
        pointer = pointer[nodeName];
      }
    });
    return pointer;
  }
}
