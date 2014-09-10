CPU
===

> A specification for CPU performance metrics.


## Metrics

#### [cpu.guestAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent running a virtual CPU for a guest OS (virtual machine) across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.guestNiceAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent running a virtual CPU for a guest OS (virtual machine) with a positive niceness value (low priority).

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most archictures. Nice values have an inverse relation to priority: processes with highly positive nice values are lower priority, while those with negative nice values are high priority. This value is used by the OS when scheduling tasks for an overloaded processor.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.idleAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent idle across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.interruptsAverage](http://linux.die.net/man/5/proc)

Aggregate number of interrupts across all CPUs. An interrupt occurs when hardware or software sends a signal to the processor telling it to temporarily halt what it is currently executing and perform some other task.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `MAX_UNSIGNED_LONG` | interrupts | raw | [count](https://github.com/doc-metrix/data-types#count)



===
## Contributing

To contribute to this specification, see the contributing [guide](https://github.com/doc-metrix/contributing). Any updates to the specification should be tagged.

``` bash
$ git tag -a <major.minor.patch> -m "[UPDATE] version."
$ git push origin <major.minor.patch>
```

Use [semantic versioning](http://semver.org/) (semvar) for communicating versions.

*	Any new metrics should be communicated as `minor` updates.
*	Any corrections/value modifications should be `patches`.
* 	Any specification restructuring (changing field names, removing fields, etc) should be communicated as a `major` update.

===
## Usage

The specification is stored as [JSON](http://json.org/), a lightweight data-interchange format. Many languages provide JSON support: [JavaScript](http://www.json.org/js.html), [Python](https://docs.python.org/2/library/json.html), [Go](http://golang.org/pkg/encoding/json/), [PHP](http://php.net/manual/en/book.json.php), [Java](http://json.org/java/), [Haskell](http://hackage.haskell.org/package/json), and [others](http://json.org/).

You are free to use the JSON specification, as is. Simply copy the file and use accordingly.

For those using package managers to manage dependencies, we provide package manager support, as outlined below.


### Bower

The specification is registered as a [Bower](http://bower.io) package. Bower provides a straightforward means for managing dependencies.

In order to use Bower, you must first install [Node.js](http://nodejs.org/) and [Git](http://git-scm.com/book/en/Getting-Started-Installing-Git). Once the prerequisites are installed,

``` bash
$ npm install -g bower
```

To [install](http://bower.io/docs/api/#install) the latest specification,

``` bash
$ bower install doc-metrix-cpu
```

Bower will place the specification in a `bower_components/` directory within the current working directory.

To [update](http://bower.io/docs/api/#update) to the latest specification,

``` bash
$ bower update doc-metrix-cpu
```


### Utilities

List of utilities using this specification:

*	[Node.js Module](https://github.com/doc-metrix/cpu-node)


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. [NodePrime](http://nodeprime.com).

