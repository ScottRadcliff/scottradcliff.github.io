---
layout: post
title: Bypassing Self Signed SSL Certs with Curl
date: 2019-12-03
---

Working with some systems that have some self signed SSL certs for working in staging/sandbox environments and needed to test out some URLs. Naturally grabbed `curl`, but was getting an error.

    curl: (51) SSL: no alternative certificate subject name matches target host name

Turns out the fix is easy. Just pass in the `--insecure` flag.

    curl --insecure https://domain.com
