# in-stream

stdin or -f command line file read stream (stream2 for node 0.8.x)

## Use Case

Assist with pipable shell. Also see [out-stream](https://github.com/angleman/out-stream)

## Install

```sh
npm install in-stream
```

## Usage

**sample.txt**

```
hello
```

**myapp**:

```js
#!/usr/local/bin/node
inStream = require('in-stream')
inStream.pipe(process.stdout)
```

```sh
ls | ./myapp
// myapp
// sample.txt

./myapp -f sample.txt
// hello 
```

Remember to ```chmod a+x myapp``` to make it executable

## License

### MIT
