# AWS S3 & Route 53 Setup Guide

To deploy your static site to AWS, follow these steps to prepare your environment.

> [!NOTE]
> **Domain Clarification**:
> *   **Registrar**: The company you bought your domain from (e.g., GoDaddy, Namecheap). This **does not change**.
> *   **DNS Host**: The service that manages your records (A, CNAME). Route 53 becomes your **DNS Host**.
> *   **Web Host**: Where your files live. AWS S3 becomes your **Web Host**.
>
> *Connecting Route 53 requires you to update the "Nameservers" at your Registrar to point to AWS. You keep paying your Registrar for the domain itself.*

## 1. Create S3 Bucket
1.  Log in to the [AWS Console](https://console.aws.amazon.com/s3).
2.  Click **Create bucket**.
3.  **Bucket name**: Enter your domain name (e.g., `www.therapysquare.co.ke` or `therapysquare.co.ke`).
4.  **Region**: Choose a region close to your users (e.g., `eu-west-1` or `us-east-1`).
5.  **Object Ownership**: Select **ACLs enabled** and **Bucket owner preferred** (optional, but simplifies public access sometimes; strictly creating a policy is better, but let's stick to standard static hosting).
6.  **Block Public Access**: **Uncheck** "Block all public access" and acknowledge the warning.
7.  Click **Create bucket**.

### Enable Static Hosting
1.  Click on your new bucket.
2.  Go to **Properties** -> Scroll down to **Static website hosting**.
3.  Click **Edit** -> **Enable**.
4.  **Index document**: `index.html`.
5.  **Error document**: `index.html` (Important for React Router!).
6.  Click **Save changes**.

### Bucket Policy
1.  Go to **Permissions**.
2.  Under **Bucket policy**, click **Edit** and paste this (replace `YOUR_BUCKET_NAME`):
    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
            }
        ]
    }
    ```

## 2. Create IAM User (for GitHub Actions)
1.  Go to [IAM Console](https://console.aws.amazon.com/iam).
2.  Click **Users** -> **Create user**.
3.  **User name**: `github-actions-deploy`.
4.  **Permissions**: Select **Attach policies directly**.
5.  Search for `AmazonS3FullAccess` and select it (or create a stricter policy just for your bucket).
6.  Create the user.
7.  Click on the user -> **Security credentials** -> **Create access key**.
8.  Select **Command Line Interface (CLI)**.
9.  **Copy** the `Access key ID` and `Secret access key`.

## 3. Configure GitHub Secrets
1.  Go to your GitHub Repo -> **Settings** -> **Secrets and variables** -> **Actions**.
2.  Add the following **Repository secrets**:
    *   `AWS_ACCESS_KEY_ID`: (Paste your key ID)
    *   `AWS_SECRET_ACCESS_KEY`: (Paste your secret key)
    *   `AWS_REGION`: (e.g., `us-east-1`)
    *   `AWS_S3_BUCKET`: (Your bucket name)

## 4. Route 53 (Connect Domain)
1.  Go to [Route 53 Console](https://console.aws.amazon.com/route53).
2.  **Hosted zones** -> Click your domain (or create one).
3.  Click **Create record**.
4.  **Record name**: `www` (or leave empty for root).
5.  **Record type**: `A` - Routes traffic to an IPv4 address and some AWS resources.
6.  **Alias**: Toggle **Alias** to **On**.
7.  **Route traffic to**:
    *   Choose endpoint: **Alias to S3 website endpoint**.
    *   Choose region: (Your bucket region).
    *   Choose bucket: (Your bucket should appear).
8.  Click **Create records**.

### Update Nameservers (Crucial Step)
To make the internet actually use AWS Route 53 for your domain:
1.  In the Route 53 Hosted Zone, look for the record with type **NS** (Nameservers).
2.  You will see 4 values like `ns-123.awsdns-45.com`, `ns-678.awsdns-12.net`, etc.
3.  **Copy** all 4 of these.
4.  Log in to your **HostAfrica Client Area** (https://my.hostafrica.com/clientarea.php).
5.  Go to **Domains** -> **My Domains**.
6.  Click the **wrench icon** (or "Manage") next to your domain.
7.  In the left sidebar (or tabs), click **Nameservers**.
8.  Select **Use custom nameservers (enter below)**.
9.  **DELETE** the existing nameservers (e.g., `ns1.host-ww.net`). You must **REPLACE** them with the AWS ones.
10. Ensure you have **4 fields** (click "Add Nameserver" if you only see 2).
11. Paste the 4 AWS nameservers into the fields (Nameserver 1, 2, 3, 4).
12. Click **Change Nameservers**.
