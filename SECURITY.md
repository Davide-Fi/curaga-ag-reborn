# Security Guidelines

## Contact Form Security

### Implemented Protections
- **Input Validation**: All form inputs are validated and sanitized server-side
- **Rate Limiting**: 5 submissions per 15-minute window per IP address
- **Length Limits**: Maximum lengths enforced for all fields
- **XSS Prevention**: HTML entity encoding applied to user inputs
- **Secure Logging**: No sensitive data logged; only metadata tracked

### Rate Limiting
- **Window**: 15 minutes
- **Limit**: 5 requests per IP
- **Response**: 429 status code when exceeded

## Security Headers

### Development & Preview
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Limits referrer info
- `Permissions-Policy` - Restricts browser APIs
- `Content-Security-Policy` - Controls resource loading

## Database Security

### Row Level Security (RLS)
- **contact_submissions table**: 
  - Insert allowed for all (form submissions)
  - Select restricted to admin users only
  - No update/delete permissions for security

### Edge Function Security
- Environment variables for API keys
- CORS headers properly configured
- Input validation before database operations
- Structured error handling

## Monitoring

### Security Events Logged
- Rate limit violations with IP addresses
- Form submission metadata (non-sensitive)
- Validation failures
- Database operation errors

## Best Practices

1. **Never log sensitive user data**
2. **Always validate inputs server-side**
3. **Implement rate limiting on all public endpoints**
4. **Use parameterized queries (Supabase client handles this)**
5. **Apply principle of least privilege to database access**
6. **Monitor for unusual patterns in form submissions**

## Production Considerations

- Consider implementing CAPTCHA for high-traffic scenarios
- Set up alerts for repeated rate limit violations
- Regular security reviews of edge functions
- Monitor Supabase logs for anomalies
- Keep dependencies updated

## Emergency Procedures

If suspicious activity is detected:
1. Check edge function logs in Supabase dashboard
2. Review contact_submissions table for patterns
3. Temporarily disable contact form if needed
4. Update rate limits if necessary