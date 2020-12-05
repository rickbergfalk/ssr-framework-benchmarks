# ssr-framework-benchmarks

SSR benchmarks for Next, Nuxt, Sapper, and ???

Will probably add some old school EJS and Mustache to get an idea how these line up.

## The setup

Each project has an index page that renders 100 widget components with titles, descriptions, and 9 tags, all as sub components. Each framework might have a bit of extra CSS and stuff. I wanted to see what looping through data and a few components would amount to.

Setups are mostly stock templates (whatever Nuxt/Next/Sapper starts you out with).

Each setup _should_ utilize SSR. No fetching is performed for SSR to keep things consistent.

Eventually might add more components, clean things up, etc. Might be nice to have consistent content served, but I don't know that it matters that much.

## Benchmarks

```sh
ab -n 1000 http://localhost:3000/
```

## Next

```
Document Path:          /
Document Length:        35171 bytes

Concurrency Level:      1
Time taken for tests:   4.320 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      35469000 bytes
HTML transferred:       35171000 bytes
Requests per second:    231.50 [#/sec] (mean)
Time per request:       4.320 [ms] (mean)
Time per request:       4.320 [ms] (mean, across all concurrent requests)
Transfer rate:          8018.80 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     3    4   2.2      4      55
Waiting:        3    4   2.1      4      54
Total:          3    4   2.2      4      55

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      5
  80%      5
  90%      5
  95%      6
  98%      7
  99%     10
 100%     55 (longest request)
```

## Nuxt

```
Document Path:          /
Document Length:        28545 bytes

Concurrency Level:      1
Time taken for tests:   22.514 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      28769000 bytes
HTML transferred:       28545000 bytes
Requests per second:    44.42 [#/sec] (mean)
Time per request:       22.514 [ms] (mean)
Time per request:       22.514 [ms] (mean, across all concurrent requests)
Transfer rate:          1247.87 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:    14   22   5.3     21     117
Waiting:       14   22   5.3     21     116
Total:         14   22   5.3     22     117

Percentage of the requests served within a certain time (ms)
  50%     22
  66%     24
  75%     25
  80%     26
  90%     27
  95%     29
  98%     33
  99%     37
 100%    117 (longest request)
```

## Sapper

```
Document Path:          /
Document Length:        34609 bytes

Concurrency Level:      1
Time taken for tests:   1.987 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      35041000 bytes
HTML transferred:       34609000 bytes
Requests per second:    503.27 [#/sec] (mean)
Time per request:       1.987 [ms] (mean)
Time per request:       1.987 [ms] (mean, across all concurrent requests)
Transfer rate:          17221.75 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     1    2   0.7      2       6
Waiting:        1    2   0.6      2       6
Total:          1    2   0.7      2       7

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      2
  75%      2
  80%      2
  90%      3
  95%      3
  98%      4
  99%      5
 100%      7 (longest request)
```
