CPU
===

> A specification for CPU performance metrics.


## Metrics


#### [cpu.guest](http://linux.die.net/man/5/proc)

Percentage of time spent running a virtual CPU for a guest OS (virual machine).

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.guestAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent running a virtual CPU for a guest OS (virtual machine) across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.guestNice](http://linux.die.net/man/5/proc)

Percentage of time spent running a virtual CPU for a guest OS (virtual machine) with a positive niceness value (low priority).

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures. Nice values have an inverse relationship to priority: processes with highly positive nice values are lower priority, while those with negative nice values are high priority. This value is used by the OS when scheduling tasks for an overloaded processor.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.guestNiceAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent running a virtual CPU for a guest OS (virtual machine) with a positive niceness value (low priority).

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most archictures. Nice values have an inverse relation to priority: processes with highly positive nice values are lower priority, while those with negative nice values are high priority. This value is used by the OS when scheduling tasks for an overloaded processor.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.idle](http://linux.die.net/man/5/proc)

Percentage of time CPU spent idle.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.idleAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent idle across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.interrupts](http://linux.die.net/man/5/proc)

Number of interrupts handled by CPU. An interrupt occurs when hardware or software sends a signal to the processor telling it to temporarily halt what it is currently executing and perform some other task.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `MAX_UNSIGNED_LONG` | interrupts | raw | [count](https://github.com/doc-metrix/data-types#count)



#### [cpu.interruptsAverage](http://linux.die.net/man/5/proc)

Average number of interrupts across all CPUs. An interrupt occurs when hardware or software sends a signal to the processor telling it to temporarily halt what it is currently executing and perform some other task.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `MAX_UNSIGNED_LONG` | interrupts | derived | [count](https://github.com/doc-metrix/data-types#count)



#### [cpu.iowait](http://linux.die.net/man/5/proc)

Percentage of time processor is waiting for I/O operations to complete.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.iowaitAverage](http://linux.die.net/man/5/proc)

Average percentage of time processors are waiting for I/O operations, across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.irq](http://linux.die.net/man/5/proc)

Percentage of time spent dealing with hardware interrupts.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.irqAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent dealing with hardware interrupts across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.nice](http://linux.die.net/man/5/proc)

Percentage of time executing tasks in user mode with a positive nice value (tasks with a low priority).

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures. Nice values have an inverse relation to priority: processes with highly positive nice values are lower priority, while those with negative nice values are high priority. This value is used by the OS when scheduling tasks for an overloaded processor.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.niceAverage](http://linux.die.net/man/5/proc)

Average percentage of time executing tasks in user mode with a positive nice value (tasks with low priority).

Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures. Nice values have an inverse relation to priority: processes with highly positive nice values are lower priority, while those with negative nice values are high priority. This value is used by the OS when scheduling tasks for an overloaded processor.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.procsBlocked](http://linux.die.net/man/5/proc)

Number of processes currently waiting for I/O operation to complete.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `MAX_UNSIGNED_LONG` | processes | raw | [count](https://github.com/doc-metrix/data-types#count)



#### [cpu.procsBlockedAverage](http://linux.die.net/man/5/proc)

Total number of processes waiting for I/O operations to complete across all CPUs.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `MAX_UNSIGNED_LONG` | processes | raw | [count](https://github.com/doc-metrix/data-types#count)


#### [cpu.procsRunning](http://linux.die.net/man/5/proc)

Number of processes currently executing on processor.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `MAX_UNSIGNED_LONG` | processes | raw | [count](https://github.com/doc-metrix/data-types#count)


#### [cpu.procsRunningAverage](http://linux.die.net/man/5/proc)

Total number of processes currently executing across all CPUs.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | `MAX_UNSIGNED_LONG` | processes | raw | [count](https://github.com/doc-metrix/data-types#count)



#### [cpu.softirq](http://linux.die.net/man/5/proc)

Percentage of time spent dealing with software interrupts.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.softirqAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent dealing with software interrupts across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.steal](http://linux.die.net/man/5/proc)

Average percentage of time spent in \"involuntary wait\". This is time that cannot be classified in one of the other categories (e.g. system, idle, etc).

Note: This is most often only an issue when multiple VMs are running on the same physical machine. If a VM has tasks that can run, but it is unable to run them because the hypervisor is dedicating CPU time to another VM, this will show up as CPU steal. Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.stealAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent in "involuntary wait" across all CPUs. This is time that cannot be classified in one of the other categories (e.g. system, idle, etc).

Note: This is most often only an issue when multiple VMs are running on the same physical machine. If a VM has tasks that can run, but it is unable to run them because the hypervisor is dedicating CPU time to another VM, this will show up as CPU steal. Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.system](http://linux.die.net/man/5/proc)

Percentage of time processor has spent executing in kernel mode.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.systemAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent executing processes in kernel mode across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.user](http://linux.die.net/man/5/proc)

Percentage of time processor has spent executing in user mode.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)


#### [cpu.userAverage](http://linux.die.net/man/5/proc)

Average percentage of time spent executing processes in user mode across all CPUs.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | percent | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)



#### [cpu.utilization](http://linux.die.net/man/5/proc)

Percentage of CPU processing resources used between two timepoints.

Note: Time is measured in units of `USER_HZ`, which is 1/100th of a second (a `jiffy`) on most architectures.  There are multiple ways of calculating this metric, mainly in determining what counts as non-idle time.

Min | Max | Units | Metric Type | Data Type 
:---: | :---: | :---: | ---: | ---: |
0 | 1 | [utilization](https://github.com/doc-metrix/units#utilization) | derived | [percentage](https://github.com/doc-metrix/data-types#percentage)




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

