import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  const assetlinks = [
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.webelio.claimly",
      "sha256_cert_fingerprints":
        ["32:C2:5F:B0:B5:E8:BE:68:E3:1C:18:38:C4:A0:59:5F:E0:70:93:02:3C:54:C5:BF:4F:AC:62:0C:85:4A:F0:F7"]
    }
  }
]

  return NextResponse.json(assetlinks, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  })
}