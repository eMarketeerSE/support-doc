---
description: >-
  eMarketeer does not support Subresource Integrity (SRI) on its embed scripts.
  This article explains why.
---

# Why eMarketeer doesn't support SRI for embed scripts

SRI can add trust for external assets, but it also brings trade-offs — especially for a platform that delivers scripts to many customers. This article covers the reasoning and what it means for you.

## What is SRI?

Subresource Integrity (SRI) lets browsers verify that a fetched resource, such as a JavaScript file, matches an expected cryptographic hash. If the content has been altered or corrupted, the browser refuses to execute it.

## Our reasoning

After careful evaluation, here are the primary reasons we currently do not support SRI for our embed scripts:

1. Frequent updates and version agility. We continuously release improvements, security patches, optimisations, and feature enhancements. Locking each customer to a specific hash would force a manual integration update for every release, no matter how small. That approach is unsustainable at scale.
2. Lock-in risk and customer burden. SRI essentially locks the script to a fixed version. Customers must track and update the integrity value with every release, which adds maintenance burden and increases the risk of integration breakage when clients lag behind.
3. Script blocking and functional risk. If a client's integrity hash does not match — even due to minor version drift — the browser blocks the script entirely. This could disable essential features like tracking or analytics, leading to significant disruption and support overhead.
4. SRI only guards against certain threats. SRI helps protect against tampering in transit or via a compromised CDN, but it does not defend against threats earlier in the supply chain, such as a compromised build or deployment pipeline. It is not a catch-all defence.
5. Robust alternative security measures already in place. We rely on multiple layers of security to ensure safe distribution of our scripts:
    - HTTPS/TLS for secure transport.
    - Secure and audited build and deployment workflows.
    - Code reviews, access control, and internal security policies.
    - Content Security Policy (CSP) support.
    - Monitoring, auditing, and alerting on unusual activity.

    Given these layers, we currently view SRI as a maintenance burden with limited added benefit in our architecture.
6. Industry precedent. Most established platforms make explicit statements that they do not support SRI for their scripts. Their documentation notes that many services (for example Facebook, Stripe, PayPal) have similarly avoided fixed versions or SRI for their public scripts.

## What this means for you

- You can continue using our scripts without managing or rotating integrity hashes.
- We can deploy updates freely, so you receive fixes, performance improvements, and new features in a timely manner.
- We maintain strict security throughout our development and distribution processes, so the scripts delivered to you are as safe as possible.
