// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "AuthjsCapacitorOauthPlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "AuthjsCapacitorOauthPlugin",
            targets: ["AuthenticatorPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "AuthenticatorPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AuthenticatorPlugin"),
        .testTarget(
            name: "AuthenticatorPluginTests",
            dependencies: ["AuthenticatorPlugin"],
            path: "ios/Tests/AuthenticatorPluginTests")
    ]
)