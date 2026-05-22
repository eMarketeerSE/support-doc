# Cloudflare & eMarketeer Tracking Parameters

Configure Cloudflare so that eMarketeer's per-recipient tracking parameters do not cause cache misses on your landing pages.

When eMarketeer sends emails, it appends two tracking parameters to every link:

- **utm\_em\_source** — identifies the email as the traffic source
- **emtidv2** — a unique tracking ID per recipient and per send

Because these parameters have different values for every recipient and every send, Cloudflare's default caching behavior treats each click as a request to a unique URL. Every email click bypasses the cache and hits your origin server directly, negating the performance benefits of Cloudflare.

This article explains how to configure Cloudflare so these parameters are ignored when deciding whether a cached response can be served.

## Why this happens

Cloudflare uses the full URL — including all query parameters — as the cache key by default. So these two URLs are treated as completely different resources:

`https://example.com/page?utm_em_source=abc123&emtidv2=xyz789`
`https://example.com/page?utm_em_source=def456&emtidv2=uvw000`

Even though both URLs return identical content, Cloudflare fetches each one from your origin server separately. The fix is to tell Cloudflare to ignore these specific parameters when building the cache key, or to strip them from the URL entirely before caching.

## Solutions by plan

There are two approaches depending on your Cloudflare plan. Both are verified to work on the emarketeer-test.com domain.

### Free plan — URL Rewrite Rule (Transform Rules)

The Free plan does not support custom cache keys for specific query parameters. You can use a Transform Rule to rewrite the URL and strip the tracking parameters before Cloudflare evaluates the cache key. This is the most effective free-plan solution, and it also works on Pro, Business, and Enterprise plans.

How it works: Cloudflare processes Transform Rules before caching. By stripping `utm_em_source` and `emtidv2` from the URL at the edge, every email link click arrives at the cache lookup with a clean URL — identical to a direct visit. The parameters are never seen by your origin server either, which keeps your server logs clean.

Step-by-step setup:

1. Log into the Cloudflare dashboard and select your domain.
2. In the left menu, go to Rules → Transform Rules.
3. Click **+ Create rule** and select **URL Rewrite Rule**.
4. Give it a name, for example: **eMarketeer — Strip tracking params**
5. Under **If incoming requests match**, select **All incoming requests**.
6. Under **Then**, set **Path** to **Preserve**.
7. Under **Query**, select **Rewrite to…** and choose **Dynamic** from the dropdown.
8. Paste the following expression into the expression field:

```
regex_replace(http.request.uri.query, "(&?(utm_em_source|emtidv2)=[^&]*)", "")
```

9. Set **Place at** to **First**.
10. Click **Save**. The rule is enabled automatically.

This rule applies to all incoming requests. The regex safely handles cases where `utm_em_source` or `emtidv2` appear at the start, middle, or end of the query string, and leaves all other parameters intact.

### Pro plan and above — Cache Rule with custom cache key

On Pro plan and higher, you can configure Cloudflare to exclude specific query parameters from the cache key while preserving all other parameters. This is the cleanest and most precise solution.

Step-by-step setup:

1. Log into the Cloudflare dashboard and select your domain.
2. In the left menu, go to Caching → Cache Rules.
3. Click **+ Create rule**.
4. Give it a name, for example: **eMarketeer — Ignore tracking params**
5. Set the condition to match your site. To apply to all pages, select **All incoming requests**. To limit to specific paths, use a URL path condition.
6. Under **Cache eligibility**, select **Eligible for cache**.
7. Expand **Cache key settings**.
8. Under **Query string**, select **Exclude specific parameters** and enter:

```
utm_em_source
emtidv2
```

9. Click **Save and deploy** the rule.

This tells Cloudflare: when checking for a cached version of a page, ignore the values of `utm_em_source` and `emtidv2`. Requests from different email recipients all hit the same cache entry.

### Also required: cache HTML pages

By default, Cloudflare only caches static files (images, CSS, JS, and so on). HTML pages are not cached unless you explicitly configure it. If your email links point to HTML pages, you also need a Cache Rule to enable caching for those pages.

To cache HTML pages:

1. Go to Caching → Cache Rules.
2. Create a new rule.
3. Set the condition to match your landing pages (or use **All incoming requests** to cache everything).
4. Under **Cache eligibility**, select **Eligible for cache**.
5. Save and deploy.

Be careful enabling "Cache everything" if your site serves personalized or dynamic content. Only enable this for pages that return the same content to all visitors.

## Verifying the configuration

After setting up the rules, verify caching is working by checking the `CF-Cache-Status` response header.

Using curl:

```
curl -I "https://yourdomain.com/your-page?utm_em_source=test123&emtidv2=abc456"
```

Look for the `CF-Cache-Status` header in the response:

- **HIT** — served from Cloudflare's cache
- **MISS** — fetched from your origin (expected on the first request to a URL)
- **BYPASS** — caching was bypassed (check for conflicting rules or cookies)
- **DYNAMIC** — Cloudflare determined the response should not be cached

After the first MISS, make a second request with different values for `utm_em_source` and `emtidv2`. If the configuration is correct, you should see HIT because Cloudflare ignores those parameter values when looking up the cache.

Using browser developer tools: open DevTools → Network tab, click on the page request, and look for `CF-Cache-Status` in the Response Headers section.

## Summary

| Plan | Recommended solution | Specificity | Notes |
| --- | --- | --- | --- |
| Free | URL Rewrite Rule (Transform Rules) | Strips only `utm_em_source` and `emtidv2` | Available on all plans |
| Pro | Cache Rule with custom cache key | Excludes specific params from cache key | Cleanest approach |
| Business | Cache Rule + Workers for advanced logic | Full control |  |
| Enterprise | Cache Rule + Workers for advanced logic | Full control |  |

The URL Rewrite Rule approach (Free plan) works on all plans and has the added benefit of stripping the tracking parameters before they reach your origin server, keeping your server logs clean.

## Troubleshooting

### Cache status is always MISS

- Check that the Cache Rule for HTML pages is enabled (Caching → Cache Rules).
- Check for `Set-Cookie` headers in the response — Cloudflare does not cache responses that set cookies by default.
- Check for `Cache-Control: no-store` or `no-cache` headers from your origin.
- Verify that the Transform Rule is **Active** (not Disabled) under Rules → Transform Rules.

### Other query parameters are being stripped

The regex used in the URL Rewrite Rule only targets `utm_em_source` and `emtidv2`. All other query parameters are preserved. If you suspect other parameters are being affected, test with a URL that has only those parameters and inspect the request reaching your origin in your server logs.

### The rule applies to API requests too

If you want to limit the Transform Rule to only apply to specific paths (for example, your landing pages), change the condition from **All incoming requests** to a URL path filter. For example: **URI path starts with /campaigns/**.
