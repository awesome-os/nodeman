# nodeman
Manage AwesomeOS Nodes. 

## Description
As AwesomeOS is designed similar to FuchsiaOS in terms of the most Concepts it can not get Installed without a Node Manager
a AwesomeOS install is like a Virtual Machine so you always need a Manager the good thing is that this Manager works on
a wide variaty of existing Platforms. It is coded Mainly in ECMAScript and uses Instructions written in ECMAScript
The Abstraction into instructions is done to Enable so called Procedural Programming and Sort the Code in a way that it is
highly AI Frindly. As AwesomeOS is designed for Risc V and AI Usage in the first place everything on top of that is for incremental adoption
of the new paradigms and transition into that area.

The Concepts are already battle tested in the Chromium Project via eg: devtools and the cli flag documentation automation done by peter.

So this can be seen as a first party way to deploy and install AwesomeOS and later when we find the time AwesomeOS can be extended to replace
the FuchsiaOS kernel (Project Zircon)

It is using the battle tested JustJS Component Pattern via B8G (Big Engine) which is designed to Build JIT Compilers with already resolved links. 
This enables us to Compose Software on the Binary (ASM) Compiler level in isolation. So that implements Capability Protocol based linked virtual machines / systems.

It comes also with Quaternion DB Which is a Currency / AI Interface / Programable Grid Computer System.

Quaternion Lite is simple a ECMAScriptNext Compatible Context in a WInterOP Environment. So it works already in Browsers, GraalJS, GraalVM, NodeJS, Deno, You Name it.

a node is defined as ref, connection where the later exposes stdin and stdout streams and optional stderr thats all it takes. 

so a array of nodes get used as source of truth and it can even include the local node eg: process.stdin process.stdout process.stderr 

so your fine 


graal-node nodejs Example of a Local Node
```ts
// connection simply should have stdin stdout stderr iterables. 
{ name: "local", connection: process }
```

Internal the nodes get Converted and consumed via Quaternion as Web ReadableStreams this adds the needed error propergation cross context to the connection
handels any retry and failover logics and so on and so on. It gives us programmable Observability even enables us to extend Observability and Debug Live if needed...

AwesomeOS is mainly Tooling for Quaternion DB to use it as a Underlaying OS and Filesystem. So it reduces the overall Stack and Dependencys needed for FullStack Projects into a single one. Which is highly Efficent as that reduces overall Coding overhead needed.








