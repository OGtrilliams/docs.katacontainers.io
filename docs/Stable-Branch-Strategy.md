---
sidebar_label: 'Branch Strategy'
sidebar_position: 16
---
Branch and release maintenance for the Kata Containers project.

## Introduction 

This document provides details about Kata Containers releases.

## Versioning

The Kata Containers project uses [semantic versioning](http://semver.org/) for all releases. 
Semantic versions are comprised of three fields in the form:

```
MAJOR.MINOR.PATCH
```

For examples: `1.0.0`, `1.0.0-rc.5`, and `99.123.77+foo.bar.baz.5`.

Semantic versioning is used since the version number is able to convey clear 
information about how a new version relates to the previous version. 
For example, semantic versioning can also provide assurances to allow users to know 
when they must upgrade compared with when they might want to upgrade:

- When `PATCH` increases, the new release contains important **security fixes**
  and an upgrade is recommended.

  The patch field can contain extra details after the number. 
Dashes denote pre-release versions. `1.0.0-rc.5` in the example denotes the fifth release
 candidate for release `1.0.0`. Plus signs denote other details. In our example, `+foo.bar.baz.5` 
provides additional information regarding release `99.123.77` in the previous example.

- When `MINOR` increases, the new release adds **new features** but *without
  changing the existing behavior*.

- When `MAJOR` increases, the new release adds **new features, bug fixes, or
  both** and which **changes the behavior from the previous release** (incompatible with previous releases).

  A major release will also likely require a change of the container manager version used, 
for example Containerd or CRI-O. Please refer to the release notes for further details.

## Release Strategy

Any new features added since the last release will be available in the next minor
release. These will include bug fixes as well. To facilitate a stable user environment, 
Kata provides stable branch-based releases and a main branch release.

## Stable branch patch criteria

No new features should be introduced to stable branches.  This is intended to limit risk to users,
providing only bug and security fixes.

## Branch Management
Kata Containers will maintain **one** stable release branch, in addition to the main branch, for
each active major release.
Once a new MAJOR or MINOR release is created from main, a new stable branch is created for
the prior MAJOR or MINOR release and the previous stable branch is no longer maintained. End of
maintenance for a branch is announced on the Kata Containers mailing list.  Users can determine
the version currently installed by running `kata-runtime kata-env`. It is recommended to use the
latest stable branch available.

A couple of examples follow to help clarify this process.

### New bug fix introduced

A bug fix is submitted against the runtime which does not introduce new inter-component dependencies.
This fix is applied to both the main and stable branches, and there is no need to create a new
stable branch.

| Branch | Original version | New version |
|--|--|--|
| `main` | `2.3.0-rc0` | `2.3.0-rc1` |
| `stable-2.2` | `2.2.0` | `2.2.1` |
| `stable-2.1` | (unmaintained) | (unmaintained) |


### New release made feature or change adding new inter-component dependency

A new feature is introduced, which adds a new inter-component dependency. In this case a new stable
branch is created (stable-2.3) starting from main and the previous stable branch (stable-2.2)
is dropped from maintenance.


| Branch | Original version | New version |
|--|--|--|
| `main` | `2.3.0-rc1` | `2.3.0` |
| `stable-2.3` | N/A| `2.3.0` |
| `stable-2.2` | `2.2.1` | (unmaintained) |
| `stable-2.1` | (unmaintained) | (unmaintained) |

Note, the stable-2.2 branch will still exist with tag 2.2.1, but under current plans it is
not maintained further. The next tag applied to main will be 2.4.0-alpha0. We would then
create a couple of alpha releases gathering features targeted for that particular release (in
this case 2.4.0), followed by a release candidate. The release candidate marks a feature freeze.
A new stable branch is created for the release candidate. Only bug fixes and any security issues
are added to the branch going forward until release 2.4.0 is made.
   
## Backporting Process 

Development that occurs against the main branch and applicable code commits should also be submitted
against the stable branches. Some guidelines for this process follow::
  1. Only bug and security fixes which do not introduce inter-component dependencies are
 candidates for stable branches. These PRs should be marked with "bug" in GitHub.
  2. Once a PR is created against main which meets requirement of (1), a comparable one
 should also be submitted against the stable branches. It is the responsibility of the submitter
 to apply their pull request against stable, and it is the responsibility of the
 reviewers to help identify stable-candidate pull requests.
 
## Continuous Integration Testing

The test repository is forked to create stable branches from main. Full CI
runs on each stable and main PR using its respective tests repository branch.

### An alternative method for CI testing:

Ideally, the continuous integration infrastructure will run the same test suite on both main
and the stable branches.  When tests are modified or new feature tests are introduced, explicit
logic should exist within the testing CI to make sure only applicable tests are executed against
stable and main. While this is not in place currently, it should be considered in the long term.

## Release Management

### Patch releases

Releases are made every four weeks, which include a GitHub release as
well as binary packages. These patch releases are made for both stable branches, and a "release candidate"
for the next `MAJOR` or `MINOR` is created from main. If there are no changes across all the repositories, no
release is created and an announcement is made on the developer mailing list to highlight this.
If a release is being made, each repository is tagged for this release, regardless
of whether changes are introduced. The release schedule can be seen on the
[release rotation wiki page](https://github.com/kata-containers/community/wiki/Release-Team-Rota).

If there is urgent need for a fix, a patch release will be made outside of the planned schedule.

The process followed for making a release can be found at [Release Process](Release-Process.md).

## Minor releases

###  Frequency
Minor releases are less frequent in order to provide a more stable baseline for users. They are currently
running on a sixteen weeks cadence. The release schedule can be seen on the
[release rotation wiki page](https://github.com/kata-containers/community/wiki/Release-Team-Rota).

### Compatibility
Kata guarantees compatibility between components that are within one minor release of each other. 
 
This is critical for dependencies which cross between host (shimv2 runtime) and
the guest (hypervisor, rootfs and agent).  For example, consider a cluster with a long-running
deployment, workload-never-dies, all on Kata version 2.1.3 components. If the operator updates
the Kata components to the next new minor release (i.e. 2.2.0), we need to guarantee that the 2.2.0
shimv2 runtime still communicates with 2.1.3 agent within workload-never-dies.

Handling live-update is out of the scope of this document. See this [`kata-runtime` issue](https://github.com/kata-containers/runtime/issues/492) for details.
