window.BENCHMARK_DATA = {
  "lastUpdate": 1618426261320,
  "repoUrl": "https://github.com/alertedsnake/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.5 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607978408842,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23671.758752841288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015005767666120491",
            "extra": "mean: 42.24443187517579 usec\nrounds: 1600"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16453.285600899984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016538124857509201",
            "extra": "mean: 60.77813418283461 usec\nrounds: 5023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608095418458,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26559.13353939286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014032419835249738",
            "extra": "mean: 37.651830716419525 usec\nrounds: 1465"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18633.587215057472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011952355606787443",
            "extra": "mean: 53.66653175572751 usec\nrounds: 6676"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607978443999,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27867.64183959771,
            "unit": "iter/sec",
            "range": "stddev: 0.000005778268227065524",
            "extra": "mean: 35.88391173375421 usec\nrounds: 4781"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22431.525641747325,
            "unit": "iter/sec",
            "range": "stddev: 0.000007271500540177803",
            "extra": "mean: 44.58011532389484 usec\nrounds: 6330"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608095457004,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26677.59837387621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011185718787860172",
            "extra": "mean: 37.48463358602927 usec\nrounds: 4746"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20398.572341475272,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011891699517486885",
            "extra": "mean: 49.02303863524587 usec\nrounds: 6859"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426224203,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17066.020667241402,
            "unit": "iter/sec",
            "range": "stddev: 0.000037599189329850846",
            "extra": "mean: 58.59596794696972 usec\nrounds: 4087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12020.57546617865,
            "unit": "iter/sec",
            "range": "stddev: 0.00004117953490565395",
            "extra": "mean: 83.19069272628599 usec\nrounds: 6984"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607978446837,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20115.062595076408,
            "unit": "iter/sec",
            "range": "stddev: 0.000001665426549853384",
            "extra": "mean: 49.71398897087059 usec\nrounds: 1632"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14264.363990909675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016108748290778419",
            "extra": "mean: 70.10477302999807 usec\nrounds: 5406"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608095441320,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22814.224820279836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014388304149351075",
            "extra": "mean: 43.832302341085374 usec\nrounds: 1495"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16227.289305939195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017140167343996233",
            "extra": "mean: 61.62458690090646 usec\nrounds: 6306"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426236026,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16163.571259651388,
            "unit": "iter/sec",
            "range": "stddev: 0.00003066188232966598",
            "extra": "mean: 61.86751578200224 usec\nrounds: 1394"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10382.15223788377,
            "unit": "iter/sec",
            "range": "stddev: 0.00006287716364948936",
            "extra": "mean: 96.31914241741396 usec\nrounds: 7148"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607978512515,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28457.874553586345,
            "unit": "iter/sec",
            "range": "stddev: 0.000007013828248585659",
            "extra": "mean: 35.13965873020468 usec\nrounds: 5040"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21032.261066429608,
            "unit": "iter/sec",
            "range": "stddev: 0.00000197484181847062",
            "extra": "mean: 47.54600548374412 usec\nrounds: 7112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608095491582,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32322.482531143876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011722720261786462",
            "extra": "mean: 30.93821766432897 usec\nrounds: 4461"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24315.57789657696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019375294523492323",
            "extra": "mean: 41.1258989711602 usec\nrounds: 7582"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426187594,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30740.762769751964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011677261504198448",
            "extra": "mean: 32.53009717065223 usec\nrounds: 4878"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22003.0355708785,
            "unit": "iter/sec",
            "range": "stddev: 0.000002122215419763942",
            "extra": "mean: 45.44827447915968 usec\nrounds: 7159"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607978610950,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27986.85298876391,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014513099443817076",
            "extra": "mean: 35.731062738689396 usec\nrounds: 4973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21002.965530481837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015876634377338307",
            "extra": "mean: 47.612324009611356 usec\nrounds: 7043"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608095640908,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28516.593730035194,
            "unit": "iter/sec",
            "range": "stddev: 0.00001473866183273997",
            "extra": "mean: 35.06730184772198 usec\nrounds: 4817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20446.627728265063,
            "unit": "iter/sec",
            "range": "stddev: 0.00002903501136202261",
            "extra": "mean: 48.90782056043488 usec\nrounds: 8599"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426207721,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25181.862214100034,
            "unit": "iter/sec",
            "range": "stddev: 0.000021588688161855385",
            "extra": "mean: 39.71112189789013 usec\nrounds: 4594"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17912.164054107507,
            "unit": "iter/sec",
            "range": "stddev: 0.000027289858930262977",
            "extra": "mean: 55.827983541200666 usec\nrounds: 8020"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607978656098,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 249342.29769624642,
            "unit": "iter/sec",
            "range": "stddev: 0.000021000129771717795",
            "extra": "mean: 4.010550994513637 usec\nrounds: 38461"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 190462.70300357448,
            "unit": "iter/sec",
            "range": "stddev: 0.000006194393047487573",
            "extra": "mean: 5.250371774789065 usec\nrounds: 142858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608095609096,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 240721.41287008728,
            "unit": "iter/sec",
            "range": "stddev: 0.00005038751725614702",
            "extra": "mean: 4.154179672166018 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 181830.19263027035,
            "unit": "iter/sec",
            "range": "stddev: 0.000007764878412286327",
            "extra": "mean: 5.499636696933928 usec\nrounds: 119048"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426133668,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 100630.52464707514,
            "unit": "iter/sec",
            "range": "stddev: 4.956838098694142e-7",
            "extra": "mean: 9.937342605607347 usec\nrounds: 12151"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 210609.45493980788,
            "unit": "iter/sec",
            "range": "stddev: 0.000015401837128463504",
            "extra": "mean: 4.748124913412837 usec\nrounds: 59169"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426145249,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 74726.47674227171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000311204559605818",
            "extra": "mean: 13.382137678576168 usec\nrounds: 11062"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 140757.992148525,
            "unit": "iter/sec",
            "range": "stddev: 0.000005432204801607904",
            "extra": "mean: 7.104392331376964 usec\nrounds: 56177"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426151774,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 94904.86763986002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029862355992180012",
            "extra": "mean: 10.536867337455726 usec\nrounds: 12920"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 179564.50404541593,
            "unit": "iter/sec",
            "range": "stddev: 0.000004688321375013394",
            "extra": "mean: 5.5690293876070145 usec\nrounds: 56180"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426152499,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 49138.206108950406,
            "unit": "iter/sec",
            "range": "stddev: 0.000025024654288847995",
            "extra": "mean: 20.35076326927312 usec\nrounds: 8271"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 96537.08610042204,
            "unit": "iter/sec",
            "range": "stddev: 0.00003583712437042941",
            "extra": "mean: 10.358713323496806 usec\nrounds: 42016"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426181019,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 505746.2911273766,
            "unit": "iter/sec",
            "range": "stddev: 3.8857754885981563e-7",
            "extra": "mean: 1.9772759930100368 usec\nrounds: 57804"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 728285.844383407,
            "unit": "iter/sec",
            "range": "stddev: 3.571617059483706e-7",
            "extra": "mean: 1.373087240006271 usec\nrounds: 101011"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426246974,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2452.112221950694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000660752011223759",
            "extra": "mean: 407.81167804974444 usec\nrounds: 205"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3696.1281589510345,
            "unit": "iter/sec",
            "range": "stddev: 0.0009046038095048893",
            "extra": "mean: 270.55338911294706 usec\nrounds: 6448"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - exporter": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426252761,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2858.529169993972,
            "unit": "iter/sec",
            "range": "stddev: 0.00003158768096462242",
            "extra": "mean: 349.83025903566653 usec\nrounds: 166"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3766.692759342698,
            "unit": "iter/sec",
            "range": "stddev: 0.0009482213194369631",
            "extra": "mean: 265.4848865811141 usec\nrounds: 5537"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73d8009904fc1693b2ba3a1e0656af376f859cf",
          "message": "no longer pin sphinx (#1766)",
          "timestamp": "2021-04-13T15:24:03-07:00",
          "tree_id": "86e3eaf4c5a1ca4b4b266b61f79310ea5ef641cb",
          "url": "https://github.com/alertedsnake/opentelemetry-python/commit/b73d8009904fc1693b2ba3a1e0656af376f859cf"
        },
        "date": 1618426260011,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2398.3948633433215,
            "unit": "iter/sec",
            "range": "stddev: 0.000014296143646407611",
            "extra": "mean: 416.9455227259856 usec\nrounds: 132"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3035.8454336508394,
            "unit": "iter/sec",
            "range": "stddev: 0.00097188632994503",
            "extra": "mean: 329.3975341812519 usec\nrounds: 4169"
          }
        ]
      }
    ]
  }
}