window.BENCHMARK_DATA = {
  "lastUpdate": 1607978409833,
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
      }
    ]
  }
}