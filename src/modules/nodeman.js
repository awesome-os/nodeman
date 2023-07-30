// data can be seen as paramters name can be seen as command 
// We Author our Instructions Directly as transform stream sink implementations this allows us to 
// use them easy directly without converting them while we could use tons of adapters this is the most
// efficent way as it does not create the stream directly but contains all infos needed to create one if needed.
export default const instructions = { 
    "npm install": {
      transform: (data,controller) => controller.enqueue(data),
    },
    "rollup": {
      transform: (data,controller) => controller.enqueue(data),
    },
    "git clone": {
      transform: (data,controller) => controller.enqueue(data),
    },
    "github get archive": {
      transform: (data="org repo ref",controller) => controller.enqueue(data),
    },
}

// for (const stdio of new ReadableStream({start(stdin){stdin.enqueue("package otherpackage")}}).pipeThrough(
// new TransformStream(instructions["npm install"]))) {
  // const output = stdio.out || stdio.err;
  // ...
// }

// On Large Deployment this gets 
// const getTransformer = (cmd,params) => 
// new TransformStream(Object.entries(instructions).find(([name,_impl])=>name.startsWith(cmd))[1])

