# Why eMarketeer Doesn’t Support SRI for Embed Scripts

### **What is SRI?**

Subresource Integrity (SRI) allows browsers to verify that a fetched resource (e.g. a JavaScript file) matches an expected cryptographic hash. If the content has been altered or corrupted, the browser refuses to execute it.

While SRI can increase trust in external assets, it also comes with trade-offs—especially for platforms like ours that deliver scripts to many customers.

### **Our Reasoning**

After careful evaluation, here are the primary reasons why we currently do not support SRI for our embed scripts:

1.  **Frequent updates & version agility**
    
    We continuously release improvements, security patches, optimizations, and feature enhancements. If we required customers to lock into a specific hash for each version, every update no matter how small would force customers to manually update their integration. That approach is unsustainable at scale.
    
2.  **Lock-in risk & customer burden**
    
    Applying SRI essentially “locks” the script to a fixed version. That means customers must track and update the integrity value with every release. This adds maintenance burden and increases the risk of integration breakage if clients lag behind.
    
3.  **Script blocking & functional risk**
    
    If a client’s integrity hash does not match (even due to minor version drift) the browser will block the script entirely. This could disable essential features like tracking or analytics, leading to significant disruption and support overhead.
    
4.  **SRI only guards against certain threats**
    
    SRI helps protect against tampering in transit or via compromised CDNs, but it does _not_ defend against threats earlier in the supply chain, such as a compromised build or deployment pipeline. It is not a catch-all defense.
    
5.  **Robust alternative security measures already in place**
    
    We rely on multiple layers of security to ensure safe distribution of our scripts:
    
    -   HTTPS/TLS for secure transport
        
    -   Secure and audited build & deployment workflows
        
    -   Code reviews, access control, and internal security policies
        
    -   Content Security Policy (CSP) support
        
    -   Monitoring, auditing, and alerting on unusual activity
        
    
    Given these layers, we currently view SRI as a maintenance burden with limited added benefit in our architecture.
    
6.  **Industry precedent**
    
    Most established platforms make explicit statements that they don’t support SRI for their scripts.
    
    In their documentation, they note that many services (e.g. Facebook, Stripe, PayPal) have similarly avoided fixed versions or SRI for their public scripts.
    

### **What This Means for You**

-   You can continue using our scripts without needing to manage or rotate integrity hashes.
    
-   We can deploy updates freely, ensuring you receive fixes, performance enhancements, and new features in a timely manner.
    
-   We maintain strict security throughout our development and distribution processes so that scripts delivered to you are as safe as possible.
