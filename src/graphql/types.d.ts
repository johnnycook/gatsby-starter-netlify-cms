export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>,
  ne: Maybe<Scalars['Boolean']>,
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>,
  ne: Maybe<Scalars['Date']>,
  gt: Maybe<Scalars['Date']>,
  gte: Maybe<Scalars['Date']>,
  lt: Maybe<Scalars['Date']>,
  lte: Maybe<Scalars['Date']>,
  in: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  __typename?: 'Directory',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName: Maybe<Scalars['String']>,
  absolutePath: Maybe<Scalars['String']>,
  relativePath: Maybe<Scalars['String']>,
  extension: Maybe<Scalars['String']>,
  size: Maybe<Scalars['Int']>,
  prettySize: Maybe<Scalars['String']>,
  modifiedTime: Maybe<Scalars['Date']>,
  accessTime: Maybe<Scalars['Date']>,
  changeTime: Maybe<Scalars['Date']>,
  birthTime: Maybe<Scalars['Date']>,
  root: Maybe<Scalars['String']>,
  dir: Maybe<Scalars['String']>,
  base: Maybe<Scalars['String']>,
  ext: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  relativeDirectory: Maybe<Scalars['String']>,
  dev: Maybe<Scalars['Int']>,
  mode: Maybe<Scalars['Int']>,
  nlink: Maybe<Scalars['Int']>,
  uid: Maybe<Scalars['Int']>,
  gid: Maybe<Scalars['Int']>,
  rdev: Maybe<Scalars['Int']>,
  blksize: Maybe<Scalars['Int']>,
  ino: Maybe<Scalars['Int']>,
  blocks: Maybe<Scalars['Int']>,
  atimeMs: Maybe<Scalars['Float']>,
  mtimeMs: Maybe<Scalars['Float']>,
  ctimeMs: Maybe<Scalars['Float']>,
  birthtimeMs: Maybe<Scalars['Float']>,
  atime: Maybe<Scalars['Date']>,
  mtime: Maybe<Scalars['Date']>,
  ctime: Maybe<Scalars['Date']>,
  birthtime: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge',
  next: Maybe<Directory>,
  node: Directory,
  previous: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  ino: Maybe<IntQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  birthtime: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity: Maybe<Scalars['Int']>,
};

export type File = Node & {
  __typename?: 'File',
  birthtime: Maybe<Scalars['Date']>,
  birthtimeMs: Maybe<Scalars['Float']>,
  sourceInstanceName: Maybe<Scalars['String']>,
  absolutePath: Maybe<Scalars['String']>,
  relativePath: Maybe<Scalars['String']>,
  extension: Maybe<Scalars['String']>,
  size: Maybe<Scalars['Int']>,
  prettySize: Maybe<Scalars['String']>,
  modifiedTime: Maybe<Scalars['Date']>,
  accessTime: Maybe<Scalars['Date']>,
  changeTime: Maybe<Scalars['Date']>,
  birthTime: Maybe<Scalars['Date']>,
  root: Maybe<Scalars['String']>,
  dir: Maybe<Scalars['String']>,
  base: Maybe<Scalars['String']>,
  ext: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  relativeDirectory: Maybe<Scalars['String']>,
  dev: Maybe<Scalars['Int']>,
  mode: Maybe<Scalars['Int']>,
  nlink: Maybe<Scalars['Int']>,
  uid: Maybe<Scalars['Int']>,
  gid: Maybe<Scalars['Int']>,
  rdev: Maybe<Scalars['Int']>,
  blksize: Maybe<Scalars['Int']>,
  ino: Maybe<Scalars['Int']>,
  blocks: Maybe<Scalars['Int']>,
  atimeMs: Maybe<Scalars['Float']>,
  mtimeMs: Maybe<Scalars['Float']>,
  ctimeMs: Maybe<Scalars['Float']>,
  atime: Maybe<Scalars['Date']>,
  mtime: Maybe<Scalars['Date']>,
  ctime: Maybe<Scalars['Date']>,
  url: Maybe<Scalars['String']>,
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childImageSharp: Maybe<ImageSharp>,
  childMarkdownRemark: Maybe<MarkdownRemark>,
};


export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type FileConnection = {
  __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  __typename?: 'FileEdge',
  next: Maybe<File>,
  node: File,
  previous: Maybe<File>,
};

export enum FileFieldsEnum {
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Url = 'url',
  PublicUrl = 'publicURL',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterTemplateKey = 'childMarkdownRemark___frontmatter___templateKey',
  ChildMarkdownRemarkFrontmatterLocale = 'childMarkdownRemark___frontmatter___locale',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterImageBirthtime = 'childMarkdownRemark___frontmatter___image___birthtime',
  ChildMarkdownRemarkFrontmatterImageBirthtimeMs = 'childMarkdownRemark___frontmatter___image___birthtimeMs',
  ChildMarkdownRemarkFrontmatterImageSourceInstanceName = 'childMarkdownRemark___frontmatter___image___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterImageAbsolutePath = 'childMarkdownRemark___frontmatter___image___absolutePath',
  ChildMarkdownRemarkFrontmatterImageRelativePath = 'childMarkdownRemark___frontmatter___image___relativePath',
  ChildMarkdownRemarkFrontmatterImageExtension = 'childMarkdownRemark___frontmatter___image___extension',
  ChildMarkdownRemarkFrontmatterImageSize = 'childMarkdownRemark___frontmatter___image___size',
  ChildMarkdownRemarkFrontmatterImagePrettySize = 'childMarkdownRemark___frontmatter___image___prettySize',
  ChildMarkdownRemarkFrontmatterImageModifiedTime = 'childMarkdownRemark___frontmatter___image___modifiedTime',
  ChildMarkdownRemarkFrontmatterImageAccessTime = 'childMarkdownRemark___frontmatter___image___accessTime',
  ChildMarkdownRemarkFrontmatterImageChangeTime = 'childMarkdownRemark___frontmatter___image___changeTime',
  ChildMarkdownRemarkFrontmatterImageBirthTime = 'childMarkdownRemark___frontmatter___image___birthTime',
  ChildMarkdownRemarkFrontmatterImageRoot = 'childMarkdownRemark___frontmatter___image___root',
  ChildMarkdownRemarkFrontmatterImageDir = 'childMarkdownRemark___frontmatter___image___dir',
  ChildMarkdownRemarkFrontmatterImageBase = 'childMarkdownRemark___frontmatter___image___base',
  ChildMarkdownRemarkFrontmatterImageExt = 'childMarkdownRemark___frontmatter___image___ext',
  ChildMarkdownRemarkFrontmatterImageName = 'childMarkdownRemark___frontmatter___image___name',
  ChildMarkdownRemarkFrontmatterImageRelativeDirectory = 'childMarkdownRemark___frontmatter___image___relativeDirectory',
  ChildMarkdownRemarkFrontmatterImageDev = 'childMarkdownRemark___frontmatter___image___dev',
  ChildMarkdownRemarkFrontmatterImageMode = 'childMarkdownRemark___frontmatter___image___mode',
  ChildMarkdownRemarkFrontmatterImageNlink = 'childMarkdownRemark___frontmatter___image___nlink',
  ChildMarkdownRemarkFrontmatterImageUid = 'childMarkdownRemark___frontmatter___image___uid',
  ChildMarkdownRemarkFrontmatterImageGid = 'childMarkdownRemark___frontmatter___image___gid',
  ChildMarkdownRemarkFrontmatterImageRdev = 'childMarkdownRemark___frontmatter___image___rdev',
  ChildMarkdownRemarkFrontmatterImageBlksize = 'childMarkdownRemark___frontmatter___image___blksize',
  ChildMarkdownRemarkFrontmatterImageIno = 'childMarkdownRemark___frontmatter___image___ino',
  ChildMarkdownRemarkFrontmatterImageBlocks = 'childMarkdownRemark___frontmatter___image___blocks',
  ChildMarkdownRemarkFrontmatterImageAtimeMs = 'childMarkdownRemark___frontmatter___image___atimeMs',
  ChildMarkdownRemarkFrontmatterImageMtimeMs = 'childMarkdownRemark___frontmatter___image___mtimeMs',
  ChildMarkdownRemarkFrontmatterImageCtimeMs = 'childMarkdownRemark___frontmatter___image___ctimeMs',
  ChildMarkdownRemarkFrontmatterImageAtime = 'childMarkdownRemark___frontmatter___image___atime',
  ChildMarkdownRemarkFrontmatterImageMtime = 'childMarkdownRemark___frontmatter___image___mtime',
  ChildMarkdownRemarkFrontmatterImageCtime = 'childMarkdownRemark___frontmatter___image___ctime',
  ChildMarkdownRemarkFrontmatterImageUrl = 'childMarkdownRemark___frontmatter___image___url',
  ChildMarkdownRemarkFrontmatterImagePublicUrl = 'childMarkdownRemark___frontmatter___image___publicURL',
  ChildMarkdownRemarkFrontmatterImageId = 'childMarkdownRemark___frontmatter___image___id',
  ChildMarkdownRemarkFrontmatterImageChildren = 'childMarkdownRemark___frontmatter___image___children',
  ChildMarkdownRemarkFrontmatterSubheading = 'childMarkdownRemark___frontmatter___subheading',
  ChildMarkdownRemarkFrontmatterHeroBirthtime = 'childMarkdownRemark___frontmatter___hero___birthtime',
  ChildMarkdownRemarkFrontmatterHeroBirthtimeMs = 'childMarkdownRemark___frontmatter___hero___birthtimeMs',
  ChildMarkdownRemarkFrontmatterHeroSourceInstanceName = 'childMarkdownRemark___frontmatter___hero___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterHeroAbsolutePath = 'childMarkdownRemark___frontmatter___hero___absolutePath',
  ChildMarkdownRemarkFrontmatterHeroRelativePath = 'childMarkdownRemark___frontmatter___hero___relativePath',
  ChildMarkdownRemarkFrontmatterHeroExtension = 'childMarkdownRemark___frontmatter___hero___extension',
  ChildMarkdownRemarkFrontmatterHeroSize = 'childMarkdownRemark___frontmatter___hero___size',
  ChildMarkdownRemarkFrontmatterHeroPrettySize = 'childMarkdownRemark___frontmatter___hero___prettySize',
  ChildMarkdownRemarkFrontmatterHeroModifiedTime = 'childMarkdownRemark___frontmatter___hero___modifiedTime',
  ChildMarkdownRemarkFrontmatterHeroAccessTime = 'childMarkdownRemark___frontmatter___hero___accessTime',
  ChildMarkdownRemarkFrontmatterHeroChangeTime = 'childMarkdownRemark___frontmatter___hero___changeTime',
  ChildMarkdownRemarkFrontmatterHeroBirthTime = 'childMarkdownRemark___frontmatter___hero___birthTime',
  ChildMarkdownRemarkFrontmatterHeroRoot = 'childMarkdownRemark___frontmatter___hero___root',
  ChildMarkdownRemarkFrontmatterHeroDir = 'childMarkdownRemark___frontmatter___hero___dir',
  ChildMarkdownRemarkFrontmatterHeroBase = 'childMarkdownRemark___frontmatter___hero___base',
  ChildMarkdownRemarkFrontmatterHeroExt = 'childMarkdownRemark___frontmatter___hero___ext',
  ChildMarkdownRemarkFrontmatterHeroName = 'childMarkdownRemark___frontmatter___hero___name',
  ChildMarkdownRemarkFrontmatterHeroRelativeDirectory = 'childMarkdownRemark___frontmatter___hero___relativeDirectory',
  ChildMarkdownRemarkFrontmatterHeroDev = 'childMarkdownRemark___frontmatter___hero___dev',
  ChildMarkdownRemarkFrontmatterHeroMode = 'childMarkdownRemark___frontmatter___hero___mode',
  ChildMarkdownRemarkFrontmatterHeroNlink = 'childMarkdownRemark___frontmatter___hero___nlink',
  ChildMarkdownRemarkFrontmatterHeroUid = 'childMarkdownRemark___frontmatter___hero___uid',
  ChildMarkdownRemarkFrontmatterHeroGid = 'childMarkdownRemark___frontmatter___hero___gid',
  ChildMarkdownRemarkFrontmatterHeroRdev = 'childMarkdownRemark___frontmatter___hero___rdev',
  ChildMarkdownRemarkFrontmatterHeroBlksize = 'childMarkdownRemark___frontmatter___hero___blksize',
  ChildMarkdownRemarkFrontmatterHeroIno = 'childMarkdownRemark___frontmatter___hero___ino',
  ChildMarkdownRemarkFrontmatterHeroBlocks = 'childMarkdownRemark___frontmatter___hero___blocks',
  ChildMarkdownRemarkFrontmatterHeroAtimeMs = 'childMarkdownRemark___frontmatter___hero___atimeMs',
  ChildMarkdownRemarkFrontmatterHeroMtimeMs = 'childMarkdownRemark___frontmatter___hero___mtimeMs',
  ChildMarkdownRemarkFrontmatterHeroCtimeMs = 'childMarkdownRemark___frontmatter___hero___ctimeMs',
  ChildMarkdownRemarkFrontmatterHeroAtime = 'childMarkdownRemark___frontmatter___hero___atime',
  ChildMarkdownRemarkFrontmatterHeroMtime = 'childMarkdownRemark___frontmatter___hero___mtime',
  ChildMarkdownRemarkFrontmatterHeroCtime = 'childMarkdownRemark___frontmatter___hero___ctime',
  ChildMarkdownRemarkFrontmatterHeroUrl = 'childMarkdownRemark___frontmatter___hero___url',
  ChildMarkdownRemarkFrontmatterHeroPublicUrl = 'childMarkdownRemark___frontmatter___hero___publicURL',
  ChildMarkdownRemarkFrontmatterHeroId = 'childMarkdownRemark___frontmatter___hero___id',
  ChildMarkdownRemarkFrontmatterHeroChildren = 'childMarkdownRemark___frontmatter___hero___children',
  ChildMarkdownRemarkFrontmatterNewsItems = 'childMarkdownRemark___frontmatter___news___items',
  ChildMarkdownRemarkFrontmatterNewsTitle = 'childMarkdownRemark___frontmatter___news___title',
  ChildMarkdownRemarkFrontmatterClientsItems = 'childMarkdownRemark___frontmatter___clients___items',
  ChildMarkdownRemarkFrontmatterClientsTitle = 'childMarkdownRemark___frontmatter___clients___title',
  ChildMarkdownRemarkFrontmatterWorkItems = 'childMarkdownRemark___frontmatter___work___items',
  ChildMarkdownRemarkFrontmatterWorkSubtitle = 'childMarkdownRemark___frontmatter___work___subtitle',
  ChildMarkdownRemarkFrontmatterWorkTitle = 'childMarkdownRemark___frontmatter___work___title',
  ChildMarkdownRemarkFrontmatterReferencesItems = 'childMarkdownRemark___frontmatter___references___items',
  ChildMarkdownRemarkFrontmatterReferencesSubtitle = 'childMarkdownRemark___frontmatter___references___subtitle',
  ChildMarkdownRemarkFrontmatterReferencesTitle = 'childMarkdownRemark___frontmatter___references___title',
  ChildMarkdownRemarkFrontmatterTechnologiesDescription = 'childMarkdownRemark___frontmatter___technologies___description',
  ChildMarkdownRemarkFrontmatterTechnologiesItems = 'childMarkdownRemark___frontmatter___technologies___items',
  ChildMarkdownRemarkFrontmatterTechnologiesTitle = 'childMarkdownRemark___frontmatter___technologies___title',
  ChildMarkdownRemarkFrontmatterContactContactPerson = 'childMarkdownRemark___frontmatter___contact___contactPerson',
  ChildMarkdownRemarkFrontmatterContactTitle = 'childMarkdownRemark___frontmatter___contact___title',
  ChildMarkdownRemarkFrontmatterFooterCopy = 'childMarkdownRemark___frontmatter___footer___copy',
  ChildMarkdownRemarkFrontmatterFooterSocial = 'childMarkdownRemark___frontmatter___footer___social',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  birthtime: Maybe<DateQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  ino: Maybe<IntQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  url: Maybe<StringQueryOperatorInput>,
  publicURL: Maybe<StringQueryOperatorInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  childImageSharp: Maybe<ImageSharpFilterInput>,
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>,
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>,
  ne: Maybe<Scalars['Float']>,
  gt: Maybe<Scalars['Float']>,
  gte: Maybe<Scalars['Float']>,
  lt: Maybe<Scalars['Float']>,
  lte: Maybe<Scalars['Float']>,
  in: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp',
  id: Scalars['ID'],
  fixed: Maybe<ImageSharpFixed>,
  resolutions: Maybe<ImageSharpResolutions>,
  fluid: Maybe<ImageSharpFluid>,
  sizes: Maybe<ImageSharpSizes>,
  original: Maybe<ImageSharpOriginal>,
  resize: Maybe<ImageSharpResize>,
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>,
  maxHeight: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>,
  maxHeight: Maybe<Scalars['Int']>,
  base64Width: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone: Maybe<DuotoneGradient>,
  traceSVG: Maybe<Potrace>,
  quality: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  quality: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge',
  next: Maybe<ImageSharp>,
  node: ImageSharp,
  previous: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  Id = 'id',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  fixed: Maybe<ImageSharpFixedFilterInput>,
  resolutions: Maybe<ImageSharpResolutionsFilterInput>,
  fluid: Maybe<ImageSharpFluidFilterInput>,
  sizes: Maybe<ImageSharpSizesFilterInput>,
  original: Maybe<ImageSharpOriginalFilterInput>,
  resize: Maybe<ImageSharpResizeFilterInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed',
  base64: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  aspectRatio: Maybe<Scalars['Float']>,
  width: Maybe<Scalars['Float']>,
  height: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
  srcSet: Maybe<Scalars['String']>,
  srcWebp: Maybe<Scalars['String']>,
  srcSetWebp: Maybe<Scalars['String']>,
  originalName: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  width: Maybe<FloatQueryOperatorInput>,
  height: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
  srcSet: Maybe<StringQueryOperatorInput>,
  srcWebp: Maybe<StringQueryOperatorInput>,
  srcSetWebp: Maybe<StringQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid',
  base64: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  aspectRatio: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
  srcSet: Maybe<Scalars['String']>,
  srcWebp: Maybe<Scalars['String']>,
  srcSetWebp: Maybe<Scalars['String']>,
  sizes: Maybe<Scalars['String']>,
  originalImg: Maybe<Scalars['String']>,
  originalName: Maybe<Scalars['String']>,
  presentationWidth: Maybe<Scalars['Int']>,
  presentationHeight: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
  srcSet: Maybe<StringQueryOperatorInput>,
  srcWebp: Maybe<StringQueryOperatorInput>,
  srcSetWebp: Maybe<StringQueryOperatorInput>,
  sizes: Maybe<StringQueryOperatorInput>,
  originalImg: Maybe<StringQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
  presentationWidth: Maybe<IntQueryOperatorInput>,
  presentationHeight: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal',
  width: Maybe<Scalars['Float']>,
  height: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>,
  height: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize',
  src: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  width: Maybe<Scalars['Int']>,
  height: Maybe<Scalars['Int']>,
  aspectRatio: Maybe<Scalars['Float']>,
  originalName: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  width: Maybe<IntQueryOperatorInput>,
  height: Maybe<IntQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions',
  base64: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  aspectRatio: Maybe<Scalars['Float']>,
  width: Maybe<Scalars['Float']>,
  height: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
  srcSet: Maybe<Scalars['String']>,
  srcWebp: Maybe<Scalars['String']>,
  srcSetWebp: Maybe<Scalars['String']>,
  originalName: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  width: Maybe<FloatQueryOperatorInput>,
  height: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
  srcSet: Maybe<StringQueryOperatorInput>,
  srcWebp: Maybe<StringQueryOperatorInput>,
  srcSetWebp: Maybe<StringQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes',
  base64: Maybe<Scalars['String']>,
  tracedSVG: Maybe<Scalars['String']>,
  aspectRatio: Maybe<Scalars['Float']>,
  src: Maybe<Scalars['String']>,
  srcSet: Maybe<Scalars['String']>,
  srcWebp: Maybe<Scalars['String']>,
  srcSetWebp: Maybe<Scalars['String']>,
  sizes: Maybe<Scalars['String']>,
  originalImg: Maybe<Scalars['String']>,
  originalName: Maybe<Scalars['String']>,
  presentationWidth: Maybe<Scalars['Int']>,
  presentationHeight: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64: Maybe<StringQueryOperatorInput>,
  tracedSVG: Maybe<StringQueryOperatorInput>,
  aspectRatio: Maybe<FloatQueryOperatorInput>,
  src: Maybe<StringQueryOperatorInput>,
  srcSet: Maybe<StringQueryOperatorInput>,
  srcWebp: Maybe<StringQueryOperatorInput>,
  srcSetWebp: Maybe<StringQueryOperatorInput>,
  sizes: Maybe<StringQueryOperatorInput>,
  originalImg: Maybe<StringQueryOperatorInput>,
  originalName: Maybe<StringQueryOperatorInput>,
  presentationWidth: Maybe<IntQueryOperatorInput>,
  presentationHeight: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type InstaNode = Node & {
  __typename?: 'InstaNode',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  type: Maybe<Scalars['String']>,
  username: Maybe<Scalars['String']>,
  likes: Maybe<Scalars['Int']>,
  caption: Maybe<Scalars['String']>,
  thumbnails: Maybe<Array<Maybe<InstaNodeThumbnails>>>,
  mediaType: Maybe<Scalars['String']>,
  preview: Maybe<Scalars['String']>,
  original: Maybe<Scalars['String']>,
  timestamp: Maybe<Scalars['Int']>,
  dimensions: Maybe<InstaNodeDimensions>,
  localFile: Maybe<File>,
};

export type InstaNodeConnection = {
  __typename?: 'InstaNodeConnection',
  totalCount: Scalars['Int'],
  edges: Array<InstaNodeEdge>,
  nodes: Array<InstaNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<InstaNodeGroupConnection>,
};


export type InstaNodeConnectionDistinctArgs = {
  field: InstaNodeFieldsEnum
};


export type InstaNodeConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: InstaNodeFieldsEnum
};

export type InstaNodeDimensions = {
  __typename?: 'InstaNodeDimensions',
  height: Maybe<Scalars['Int']>,
  width: Maybe<Scalars['Int']>,
};

export type InstaNodeDimensionsFilterInput = {
  height: Maybe<IntQueryOperatorInput>,
  width: Maybe<IntQueryOperatorInput>,
};

export type InstaNodeEdge = {
  __typename?: 'InstaNodeEdge',
  next: Maybe<InstaNode>,
  node: InstaNode,
  previous: Maybe<InstaNode>,
};

export enum InstaNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Type = 'type',
  Username = 'username',
  Likes = 'likes',
  Caption = 'caption',
  Thumbnails = 'thumbnails',
  ThumbnailsSrc = 'thumbnails___src',
  ThumbnailsConfigWidth = 'thumbnails___config_width',
  ThumbnailsConfigHeight = 'thumbnails___config_height',
  MediaType = 'mediaType',
  Preview = 'preview',
  Original = 'original',
  Timestamp = 'timestamp',
  DimensionsHeight = 'dimensions___height',
  DimensionsWidth = 'dimensions___width',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileExtension = 'localFile___extension',
  LocalFileSize = 'localFile___size',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileRoot = 'localFile___root',
  LocalFileDir = 'localFile___dir',
  LocalFileBase = 'localFile___base',
  LocalFileExt = 'localFile___ext',
  LocalFileName = 'localFile___name',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileDev = 'localFile___dev',
  LocalFileMode = 'localFile___mode',
  LocalFileNlink = 'localFile___nlink',
  LocalFileUid = 'localFile___uid',
  LocalFileGid = 'localFile___gid',
  LocalFileRdev = 'localFile___rdev',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileIno = 'localFile___ino',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileAtime = 'localFile___atime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileCtime = 'localFile___ctime',
  LocalFileUrl = 'localFile___url',
  LocalFilePublicUrl = 'localFile___publicURL',
  LocalFileId = 'localFile___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  LocalFileChildImageSharpResolutionsBase64 = 'localFile___childImageSharp___resolutions___base64',
  LocalFileChildImageSharpResolutionsTracedSvg = 'localFile___childImageSharp___resolutions___tracedSVG',
  LocalFileChildImageSharpResolutionsAspectRatio = 'localFile___childImageSharp___resolutions___aspectRatio',
  LocalFileChildImageSharpResolutionsWidth = 'localFile___childImageSharp___resolutions___width',
  LocalFileChildImageSharpResolutionsHeight = 'localFile___childImageSharp___resolutions___height',
  LocalFileChildImageSharpResolutionsSrc = 'localFile___childImageSharp___resolutions___src',
  LocalFileChildImageSharpResolutionsSrcSet = 'localFile___childImageSharp___resolutions___srcSet',
  LocalFileChildImageSharpResolutionsSrcWebp = 'localFile___childImageSharp___resolutions___srcWebp',
  LocalFileChildImageSharpResolutionsSrcSetWebp = 'localFile___childImageSharp___resolutions___srcSetWebp',
  LocalFileChildImageSharpResolutionsOriginalName = 'localFile___childImageSharp___resolutions___originalName',
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  LocalFileChildImageSharpSizesBase64 = 'localFile___childImageSharp___sizes___base64',
  LocalFileChildImageSharpSizesTracedSvg = 'localFile___childImageSharp___sizes___tracedSVG',
  LocalFileChildImageSharpSizesAspectRatio = 'localFile___childImageSharp___sizes___aspectRatio',
  LocalFileChildImageSharpSizesSrc = 'localFile___childImageSharp___sizes___src',
  LocalFileChildImageSharpSizesSrcSet = 'localFile___childImageSharp___sizes___srcSet',
  LocalFileChildImageSharpSizesSrcWebp = 'localFile___childImageSharp___sizes___srcWebp',
  LocalFileChildImageSharpSizesSrcSetWebp = 'localFile___childImageSharp___sizes___srcSetWebp',
  LocalFileChildImageSharpSizesSizes = 'localFile___childImageSharp___sizes___sizes',
  LocalFileChildImageSharpSizesOriginalImg = 'localFile___childImageSharp___sizes___originalImg',
  LocalFileChildImageSharpSizesOriginalName = 'localFile___childImageSharp___sizes___originalName',
  LocalFileChildImageSharpSizesPresentationWidth = 'localFile___childImageSharp___sizes___presentationWidth',
  LocalFileChildImageSharpSizesPresentationHeight = 'localFile___childImageSharp___sizes___presentationHeight',
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  LocalFileChildMarkdownRemarkId = 'localFile___childMarkdownRemark___id',
  LocalFileChildMarkdownRemarkFrontmatterTitle = 'localFile___childMarkdownRemark___frontmatter___title',
  LocalFileChildMarkdownRemarkFrontmatterTemplateKey = 'localFile___childMarkdownRemark___frontmatter___templateKey',
  LocalFileChildMarkdownRemarkFrontmatterLocale = 'localFile___childMarkdownRemark___frontmatter___locale',
  LocalFileChildMarkdownRemarkFrontmatterDate = 'localFile___childMarkdownRemark___frontmatter___date',
  LocalFileChildMarkdownRemarkFrontmatterDescription = 'localFile___childMarkdownRemark___frontmatter___description',
  LocalFileChildMarkdownRemarkFrontmatterSubheading = 'localFile___childMarkdownRemark___frontmatter___subheading',
  LocalFileChildMarkdownRemarkExcerpt = 'localFile___childMarkdownRemark___excerpt',
  LocalFileChildMarkdownRemarkRawMarkdownBody = 'localFile___childMarkdownRemark___rawMarkdownBody',
  LocalFileChildMarkdownRemarkFileAbsolutePath = 'localFile___childMarkdownRemark___fileAbsolutePath',
  LocalFileChildMarkdownRemarkFieldsSlug = 'localFile___childMarkdownRemark___fields___slug',
  LocalFileChildMarkdownRemarkHtml = 'localFile___childMarkdownRemark___html',
  LocalFileChildMarkdownRemarkHtmlAst = 'localFile___childMarkdownRemark___htmlAst',
  LocalFileChildMarkdownRemarkExcerptAst = 'localFile___childMarkdownRemark___excerptAst',
  LocalFileChildMarkdownRemarkHeadings = 'localFile___childMarkdownRemark___headings',
  LocalFileChildMarkdownRemarkHeadingsValue = 'localFile___childMarkdownRemark___headings___value',
  LocalFileChildMarkdownRemarkHeadingsDepth = 'localFile___childMarkdownRemark___headings___depth',
  LocalFileChildMarkdownRemarkTimeToRead = 'localFile___childMarkdownRemark___timeToRead',
  LocalFileChildMarkdownRemarkTableOfContents = 'localFile___childMarkdownRemark___tableOfContents',
  LocalFileChildMarkdownRemarkWordCountParagraphs = 'localFile___childMarkdownRemark___wordCount___paragraphs',
  LocalFileChildMarkdownRemarkWordCountSentences = 'localFile___childMarkdownRemark___wordCount___sentences',
  LocalFileChildMarkdownRemarkWordCountWords = 'localFile___childMarkdownRemark___wordCount___words',
  LocalFileChildMarkdownRemarkParentId = 'localFile___childMarkdownRemark___parent___id',
  LocalFileChildMarkdownRemarkParentChildren = 'localFile___childMarkdownRemark___parent___children',
  LocalFileChildMarkdownRemarkChildren = 'localFile___childMarkdownRemark___children',
  LocalFileChildMarkdownRemarkChildrenId = 'localFile___childMarkdownRemark___children___id',
  LocalFileChildMarkdownRemarkChildrenChildren = 'localFile___childMarkdownRemark___children___children',
  LocalFileChildMarkdownRemarkInternalContent = 'localFile___childMarkdownRemark___internal___content',
  LocalFileChildMarkdownRemarkInternalContentDigest = 'localFile___childMarkdownRemark___internal___contentDigest',
  LocalFileChildMarkdownRemarkInternalDescription = 'localFile___childMarkdownRemark___internal___description',
  LocalFileChildMarkdownRemarkInternalFieldOwners = 'localFile___childMarkdownRemark___internal___fieldOwners',
  LocalFileChildMarkdownRemarkInternalIgnoreType = 'localFile___childMarkdownRemark___internal___ignoreType',
  LocalFileChildMarkdownRemarkInternalMediaType = 'localFile___childMarkdownRemark___internal___mediaType',
  LocalFileChildMarkdownRemarkInternalOwner = 'localFile___childMarkdownRemark___internal___owner',
  LocalFileChildMarkdownRemarkInternalType = 'localFile___childMarkdownRemark___internal___type'
}

export type InstaNodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  type: Maybe<StringQueryOperatorInput>,
  username: Maybe<StringQueryOperatorInput>,
  likes: Maybe<IntQueryOperatorInput>,
  caption: Maybe<StringQueryOperatorInput>,
  thumbnails: Maybe<InstaNodeThumbnailsFilterListInput>,
  mediaType: Maybe<StringQueryOperatorInput>,
  preview: Maybe<StringQueryOperatorInput>,
  original: Maybe<StringQueryOperatorInput>,
  timestamp: Maybe<IntQueryOperatorInput>,
  dimensions: Maybe<InstaNodeDimensionsFilterInput>,
  localFile: Maybe<FileFilterInput>,
};

export type InstaNodeGroupConnection = {
  __typename?: 'InstaNodeGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<InstaNodeEdge>,
  nodes: Array<InstaNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type InstaNodeSortInput = {
  fields: Maybe<Array<Maybe<InstaNodeFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type InstaNodeThumbnails = {
  __typename?: 'InstaNodeThumbnails',
  src: Maybe<Scalars['String']>,
  config_width: Maybe<Scalars['Int']>,
  config_height: Maybe<Scalars['Int']>,
};

export type InstaNodeThumbnailsFilterInput = {
  src: Maybe<StringQueryOperatorInput>,
  config_width: Maybe<IntQueryOperatorInput>,
  config_height: Maybe<IntQueryOperatorInput>,
};

export type InstaNodeThumbnailsFilterListInput = {
  elemMatch: Maybe<InstaNodeThumbnailsFilterInput>,
};

export type Internal = {
  __typename?: 'Internal',
  content: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description: Maybe<Scalars['String']>,
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType: Maybe<Scalars['Boolean']>,
  mediaType: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>,
  contentDigest: Maybe<StringQueryOperatorInput>,
  description: Maybe<StringQueryOperatorInput>,
  fieldOwners: Maybe<StringQueryOperatorInput>,
  ignoreType: Maybe<BooleanQueryOperatorInput>,
  mediaType: Maybe<StringQueryOperatorInput>,
  owner: Maybe<StringQueryOperatorInput>,
  type: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>,
  ne: Maybe<Scalars['Int']>,
  gt: Maybe<Scalars['Int']>,
  gte: Maybe<Scalars['Int']>,
  lt: Maybe<Scalars['Int']>,
  lte: Maybe<Scalars['Int']>,
  in: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars['JSON']>,
  ne: Maybe<Scalars['JSON']>,
  in: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex: Maybe<Scalars['JSON']>,
  glob: Maybe<Scalars['JSON']>,
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading',
  value: Maybe<Scalars['String']>,
  depth: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value: Maybe<StringQueryOperatorInput>,
  depth: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  frontmatter: Maybe<MarkdownRemarkFrontmatter>,
  excerpt: Maybe<Scalars['String']>,
  rawMarkdownBody: Maybe<Scalars['String']>,
  fileAbsolutePath: Maybe<Scalars['String']>,
  fields: Maybe<MarkdownRemarkFields>,
  html: Maybe<Scalars['String']>,
  htmlAst: Maybe<Scalars['JSON']>,
  excerptAst: Maybe<Scalars['JSON']>,
  headings: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead: Maybe<Scalars['Int']>,
  tableOfContents: Maybe<Scalars['String']>,
  wordCount: Maybe<MarkdownWordCount>,
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth: Maybe<Scalars['Int']>,
  heading: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge',
  next: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields',
  slug: Maybe<Scalars['String']>,
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterTemplateKey = 'frontmatter___templateKey',
  FrontmatterLocale = 'frontmatter___locale',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterImageBirthtime = 'frontmatter___image___birthtime',
  FrontmatterImageBirthtimeMs = 'frontmatter___image___birthtimeMs',
  FrontmatterImageSourceInstanceName = 'frontmatter___image___sourceInstanceName',
  FrontmatterImageAbsolutePath = 'frontmatter___image___absolutePath',
  FrontmatterImageRelativePath = 'frontmatter___image___relativePath',
  FrontmatterImageExtension = 'frontmatter___image___extension',
  FrontmatterImageSize = 'frontmatter___image___size',
  FrontmatterImagePrettySize = 'frontmatter___image___prettySize',
  FrontmatterImageModifiedTime = 'frontmatter___image___modifiedTime',
  FrontmatterImageAccessTime = 'frontmatter___image___accessTime',
  FrontmatterImageChangeTime = 'frontmatter___image___changeTime',
  FrontmatterImageBirthTime = 'frontmatter___image___birthTime',
  FrontmatterImageRoot = 'frontmatter___image___root',
  FrontmatterImageDir = 'frontmatter___image___dir',
  FrontmatterImageBase = 'frontmatter___image___base',
  FrontmatterImageExt = 'frontmatter___image___ext',
  FrontmatterImageName = 'frontmatter___image___name',
  FrontmatterImageRelativeDirectory = 'frontmatter___image___relativeDirectory',
  FrontmatterImageDev = 'frontmatter___image___dev',
  FrontmatterImageMode = 'frontmatter___image___mode',
  FrontmatterImageNlink = 'frontmatter___image___nlink',
  FrontmatterImageUid = 'frontmatter___image___uid',
  FrontmatterImageGid = 'frontmatter___image___gid',
  FrontmatterImageRdev = 'frontmatter___image___rdev',
  FrontmatterImageBlksize = 'frontmatter___image___blksize',
  FrontmatterImageIno = 'frontmatter___image___ino',
  FrontmatterImageBlocks = 'frontmatter___image___blocks',
  FrontmatterImageAtimeMs = 'frontmatter___image___atimeMs',
  FrontmatterImageMtimeMs = 'frontmatter___image___mtimeMs',
  FrontmatterImageCtimeMs = 'frontmatter___image___ctimeMs',
  FrontmatterImageAtime = 'frontmatter___image___atime',
  FrontmatterImageMtime = 'frontmatter___image___mtime',
  FrontmatterImageCtime = 'frontmatter___image___ctime',
  FrontmatterImageUrl = 'frontmatter___image___url',
  FrontmatterImagePublicUrl = 'frontmatter___image___publicURL',
  FrontmatterImageId = 'frontmatter___image___id',
  FrontmatterImageParentId = 'frontmatter___image___parent___id',
  FrontmatterImageParentChildren = 'frontmatter___image___parent___children',
  FrontmatterImageChildren = 'frontmatter___image___children',
  FrontmatterImageChildrenId = 'frontmatter___image___children___id',
  FrontmatterImageChildrenChildren = 'frontmatter___image___children___children',
  FrontmatterImageInternalContent = 'frontmatter___image___internal___content',
  FrontmatterImageInternalContentDigest = 'frontmatter___image___internal___contentDigest',
  FrontmatterImageInternalDescription = 'frontmatter___image___internal___description',
  FrontmatterImageInternalFieldOwners = 'frontmatter___image___internal___fieldOwners',
  FrontmatterImageInternalIgnoreType = 'frontmatter___image___internal___ignoreType',
  FrontmatterImageInternalMediaType = 'frontmatter___image___internal___mediaType',
  FrontmatterImageInternalOwner = 'frontmatter___image___internal___owner',
  FrontmatterImageInternalType = 'frontmatter___image___internal___type',
  FrontmatterImageChildImageSharpId = 'frontmatter___image___childImageSharp___id',
  FrontmatterImageChildImageSharpChildren = 'frontmatter___image___childImageSharp___children',
  FrontmatterImageChildMarkdownRemarkId = 'frontmatter___image___childMarkdownRemark___id',
  FrontmatterImageChildMarkdownRemarkExcerpt = 'frontmatter___image___childMarkdownRemark___excerpt',
  FrontmatterImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___image___childMarkdownRemark___rawMarkdownBody',
  FrontmatterImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___image___childMarkdownRemark___fileAbsolutePath',
  FrontmatterImageChildMarkdownRemarkHtml = 'frontmatter___image___childMarkdownRemark___html',
  FrontmatterImageChildMarkdownRemarkHtmlAst = 'frontmatter___image___childMarkdownRemark___htmlAst',
  FrontmatterImageChildMarkdownRemarkExcerptAst = 'frontmatter___image___childMarkdownRemark___excerptAst',
  FrontmatterImageChildMarkdownRemarkHeadings = 'frontmatter___image___childMarkdownRemark___headings',
  FrontmatterImageChildMarkdownRemarkTimeToRead = 'frontmatter___image___childMarkdownRemark___timeToRead',
  FrontmatterImageChildMarkdownRemarkTableOfContents = 'frontmatter___image___childMarkdownRemark___tableOfContents',
  FrontmatterImageChildMarkdownRemarkChildren = 'frontmatter___image___childMarkdownRemark___children',
  FrontmatterSubheading = 'frontmatter___subheading',
  FrontmatterHeroBirthtime = 'frontmatter___hero___birthtime',
  FrontmatterHeroBirthtimeMs = 'frontmatter___hero___birthtimeMs',
  FrontmatterHeroSourceInstanceName = 'frontmatter___hero___sourceInstanceName',
  FrontmatterHeroAbsolutePath = 'frontmatter___hero___absolutePath',
  FrontmatterHeroRelativePath = 'frontmatter___hero___relativePath',
  FrontmatterHeroExtension = 'frontmatter___hero___extension',
  FrontmatterHeroSize = 'frontmatter___hero___size',
  FrontmatterHeroPrettySize = 'frontmatter___hero___prettySize',
  FrontmatterHeroModifiedTime = 'frontmatter___hero___modifiedTime',
  FrontmatterHeroAccessTime = 'frontmatter___hero___accessTime',
  FrontmatterHeroChangeTime = 'frontmatter___hero___changeTime',
  FrontmatterHeroBirthTime = 'frontmatter___hero___birthTime',
  FrontmatterHeroRoot = 'frontmatter___hero___root',
  FrontmatterHeroDir = 'frontmatter___hero___dir',
  FrontmatterHeroBase = 'frontmatter___hero___base',
  FrontmatterHeroExt = 'frontmatter___hero___ext',
  FrontmatterHeroName = 'frontmatter___hero___name',
  FrontmatterHeroRelativeDirectory = 'frontmatter___hero___relativeDirectory',
  FrontmatterHeroDev = 'frontmatter___hero___dev',
  FrontmatterHeroMode = 'frontmatter___hero___mode',
  FrontmatterHeroNlink = 'frontmatter___hero___nlink',
  FrontmatterHeroUid = 'frontmatter___hero___uid',
  FrontmatterHeroGid = 'frontmatter___hero___gid',
  FrontmatterHeroRdev = 'frontmatter___hero___rdev',
  FrontmatterHeroBlksize = 'frontmatter___hero___blksize',
  FrontmatterHeroIno = 'frontmatter___hero___ino',
  FrontmatterHeroBlocks = 'frontmatter___hero___blocks',
  FrontmatterHeroAtimeMs = 'frontmatter___hero___atimeMs',
  FrontmatterHeroMtimeMs = 'frontmatter___hero___mtimeMs',
  FrontmatterHeroCtimeMs = 'frontmatter___hero___ctimeMs',
  FrontmatterHeroAtime = 'frontmatter___hero___atime',
  FrontmatterHeroMtime = 'frontmatter___hero___mtime',
  FrontmatterHeroCtime = 'frontmatter___hero___ctime',
  FrontmatterHeroUrl = 'frontmatter___hero___url',
  FrontmatterHeroPublicUrl = 'frontmatter___hero___publicURL',
  FrontmatterHeroId = 'frontmatter___hero___id',
  FrontmatterHeroParentId = 'frontmatter___hero___parent___id',
  FrontmatterHeroParentChildren = 'frontmatter___hero___parent___children',
  FrontmatterHeroChildren = 'frontmatter___hero___children',
  FrontmatterHeroChildrenId = 'frontmatter___hero___children___id',
  FrontmatterHeroChildrenChildren = 'frontmatter___hero___children___children',
  FrontmatterHeroInternalContent = 'frontmatter___hero___internal___content',
  FrontmatterHeroInternalContentDigest = 'frontmatter___hero___internal___contentDigest',
  FrontmatterHeroInternalDescription = 'frontmatter___hero___internal___description',
  FrontmatterHeroInternalFieldOwners = 'frontmatter___hero___internal___fieldOwners',
  FrontmatterHeroInternalIgnoreType = 'frontmatter___hero___internal___ignoreType',
  FrontmatterHeroInternalMediaType = 'frontmatter___hero___internal___mediaType',
  FrontmatterHeroInternalOwner = 'frontmatter___hero___internal___owner',
  FrontmatterHeroInternalType = 'frontmatter___hero___internal___type',
  FrontmatterHeroChildImageSharpId = 'frontmatter___hero___childImageSharp___id',
  FrontmatterHeroChildImageSharpChildren = 'frontmatter___hero___childImageSharp___children',
  FrontmatterHeroChildMarkdownRemarkId = 'frontmatter___hero___childMarkdownRemark___id',
  FrontmatterHeroChildMarkdownRemarkExcerpt = 'frontmatter___hero___childMarkdownRemark___excerpt',
  FrontmatterHeroChildMarkdownRemarkRawMarkdownBody = 'frontmatter___hero___childMarkdownRemark___rawMarkdownBody',
  FrontmatterHeroChildMarkdownRemarkFileAbsolutePath = 'frontmatter___hero___childMarkdownRemark___fileAbsolutePath',
  FrontmatterHeroChildMarkdownRemarkHtml = 'frontmatter___hero___childMarkdownRemark___html',
  FrontmatterHeroChildMarkdownRemarkHtmlAst = 'frontmatter___hero___childMarkdownRemark___htmlAst',
  FrontmatterHeroChildMarkdownRemarkExcerptAst = 'frontmatter___hero___childMarkdownRemark___excerptAst',
  FrontmatterHeroChildMarkdownRemarkHeadings = 'frontmatter___hero___childMarkdownRemark___headings',
  FrontmatterHeroChildMarkdownRemarkTimeToRead = 'frontmatter___hero___childMarkdownRemark___timeToRead',
  FrontmatterHeroChildMarkdownRemarkTableOfContents = 'frontmatter___hero___childMarkdownRemark___tableOfContents',
  FrontmatterHeroChildMarkdownRemarkChildren = 'frontmatter___hero___childMarkdownRemark___children',
  FrontmatterNewsItems = 'frontmatter___news___items',
  FrontmatterNewsItemsDescription = 'frontmatter___news___items___description',
  FrontmatterNewsItemsTitle = 'frontmatter___news___items___title',
  FrontmatterNewsTitle = 'frontmatter___news___title',
  FrontmatterClientsItems = 'frontmatter___clients___items',
  FrontmatterClientsItemsTitle = 'frontmatter___clients___items___title',
  FrontmatterClientsItemsLink = 'frontmatter___clients___items___link',
  FrontmatterClientsTitle = 'frontmatter___clients___title',
  FrontmatterWorkItems = 'frontmatter___work___items',
  FrontmatterWorkItemsDescription = 'frontmatter___work___items___description',
  FrontmatterWorkItemsTitle = 'frontmatter___work___items___title',
  FrontmatterWorkSubtitle = 'frontmatter___work___subtitle',
  FrontmatterWorkTitle = 'frontmatter___work___title',
  FrontmatterReferencesItems = 'frontmatter___references___items',
  FrontmatterReferencesItemsDescription = 'frontmatter___references___items___description',
  FrontmatterReferencesItemsSubtitle = 'frontmatter___references___items___subtitle',
  FrontmatterReferencesItemsTitle = 'frontmatter___references___items___title',
  FrontmatterReferencesSubtitle = 'frontmatter___references___subtitle',
  FrontmatterReferencesTitle = 'frontmatter___references___title',
  FrontmatterTechnologiesDescription = 'frontmatter___technologies___description',
  FrontmatterTechnologiesItems = 'frontmatter___technologies___items',
  FrontmatterTechnologiesItemsTitle = 'frontmatter___technologies___items___title',
  FrontmatterTechnologiesTitle = 'frontmatter___technologies___title',
  FrontmatterContactAddressCity = 'frontmatter___contact___address___city',
  FrontmatterContactAddressLat = 'frontmatter___contact___address___lat',
  FrontmatterContactAddressLng = 'frontmatter___contact___address___lng',
  FrontmatterContactAddressStreet = 'frontmatter___contact___address___street',
  FrontmatterContactAddressZip = 'frontmatter___contact___address___zip',
  FrontmatterContactContactPerson = 'frontmatter___contact___contactPerson',
  FrontmatterContactContactPersonEmail = 'frontmatter___contact___contactPerson___email',
  FrontmatterContactContactPersonLinkedIn = 'frontmatter___contact___contactPerson___linkedIn',
  FrontmatterContactContactPersonName = 'frontmatter___contact___contactPerson___name',
  FrontmatterContactContactPersonPhone = 'frontmatter___contact___contactPerson___phone',
  FrontmatterContactContactPersonRole = 'frontmatter___contact___contactPerson___role',
  FrontmatterContactTitle = 'frontmatter___contact___title',
  FrontmatterFooterCopy = 'frontmatter___footer___copy',
  FrontmatterFooterSocial = 'frontmatter___footer___social',
  FrontmatterFooterSocialLink = 'frontmatter___footer___social___link',
  FrontmatterFooterSocialTitle = 'frontmatter___footer___social___title',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  slug: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath: Maybe<StringQueryOperatorInput>,
  fields: Maybe<MarkdownRemarkFieldsFilterInput>,
  html: Maybe<StringQueryOperatorInput>,
  htmlAst: Maybe<JsonQueryOperatorInput>,
  excerptAst: Maybe<JsonQueryOperatorInput>,
  headings: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead: Maybe<IntQueryOperatorInput>,
  tableOfContents: Maybe<StringQueryOperatorInput>,
  wordCount: Maybe<MarkdownWordCountFilterInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter',
  title: Maybe<Scalars['String']>,
  templateKey: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>,
  date: Maybe<Scalars['Date']>,
  description: Maybe<Scalars['String']>,
  image: Maybe<File>,
  subheading: Maybe<Scalars['String']>,
  hero: Maybe<File>,
  news: Maybe<MarkdownRemarkFrontmatterNews>,
  clients: Maybe<MarkdownRemarkFrontmatterClients>,
  work: Maybe<MarkdownRemarkFrontmatterWork>,
  references: Maybe<MarkdownRemarkFrontmatterReferences>,
  technologies: Maybe<MarkdownRemarkFrontmatterTechnologies>,
  contact: Maybe<MarkdownRemarkFrontmatterContact>,
  footer: Maybe<MarkdownRemarkFrontmatterFooter>,
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type MarkdownRemarkFrontmatterClients = {
  __typename?: 'MarkdownRemarkFrontmatterClients',
  items: Maybe<Array<Maybe<MarkdownRemarkFrontmatterClientsItems>>>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterClientsFilterInput = {
  items: Maybe<MarkdownRemarkFrontmatterClientsItemsFilterListInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterClientsItems = {
  __typename?: 'MarkdownRemarkFrontmatterClientsItems',
  logo: Maybe<File>,
  title: Maybe<Scalars['String']>,
  link: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterClientsItemsFilterInput = {
  logo: Maybe<FileFilterInput>,
  title: Maybe<StringQueryOperatorInput>,
  link: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterClientsItemsFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFrontmatterClientsItemsFilterInput>,
};

export type MarkdownRemarkFrontmatterContact = {
  __typename?: 'MarkdownRemarkFrontmatterContact',
  address: Maybe<MarkdownRemarkFrontmatterContactAddress>,
  contactPerson: Maybe<Array<Maybe<MarkdownRemarkFrontmatterContactContactPerson>>>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterContactAddress = {
  __typename?: 'MarkdownRemarkFrontmatterContactAddress',
  city: Maybe<Scalars['String']>,
  lat: Maybe<Scalars['String']>,
  lng: Maybe<Scalars['String']>,
  street: Maybe<Scalars['String']>,
  zip: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterContactAddressFilterInput = {
  city: Maybe<StringQueryOperatorInput>,
  lat: Maybe<StringQueryOperatorInput>,
  lng: Maybe<StringQueryOperatorInput>,
  street: Maybe<StringQueryOperatorInput>,
  zip: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterContactContactPerson = {
  __typename?: 'MarkdownRemarkFrontmatterContactContactPerson',
  email: Maybe<Scalars['String']>,
  image: Maybe<File>,
  linkedIn: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  phone: Maybe<Scalars['String']>,
  role: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterContactContactPersonFilterInput = {
  email: Maybe<StringQueryOperatorInput>,
  image: Maybe<FileFilterInput>,
  linkedIn: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  phone: Maybe<StringQueryOperatorInput>,
  role: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterContactContactPersonFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFrontmatterContactContactPersonFilterInput>,
};

export type MarkdownRemarkFrontmatterContactFilterInput = {
  address: Maybe<MarkdownRemarkFrontmatterContactAddressFilterInput>,
  contactPerson: Maybe<MarkdownRemarkFrontmatterContactContactPersonFilterListInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>,
  templateKey: Maybe<StringQueryOperatorInput>,
  locale: Maybe<StringQueryOperatorInput>,
  date: Maybe<DateQueryOperatorInput>,
  description: Maybe<StringQueryOperatorInput>,
  image: Maybe<FileFilterInput>,
  subheading: Maybe<StringQueryOperatorInput>,
  hero: Maybe<FileFilterInput>,
  news: Maybe<MarkdownRemarkFrontmatterNewsFilterInput>,
  clients: Maybe<MarkdownRemarkFrontmatterClientsFilterInput>,
  work: Maybe<MarkdownRemarkFrontmatterWorkFilterInput>,
  references: Maybe<MarkdownRemarkFrontmatterReferencesFilterInput>,
  technologies: Maybe<MarkdownRemarkFrontmatterTechnologiesFilterInput>,
  contact: Maybe<MarkdownRemarkFrontmatterContactFilterInput>,
  footer: Maybe<MarkdownRemarkFrontmatterFooterFilterInput>,
};

export type MarkdownRemarkFrontmatterFooter = {
  __typename?: 'MarkdownRemarkFrontmatterFooter',
  copy: Maybe<Scalars['String']>,
  social: Maybe<Array<Maybe<MarkdownRemarkFrontmatterFooterSocial>>>,
};

export type MarkdownRemarkFrontmatterFooterFilterInput = {
  copy: Maybe<StringQueryOperatorInput>,
  social: Maybe<MarkdownRemarkFrontmatterFooterSocialFilterListInput>,
};

export type MarkdownRemarkFrontmatterFooterSocial = {
  __typename?: 'MarkdownRemarkFrontmatterFooterSocial',
  image: Maybe<File>,
  link: Maybe<Scalars['String']>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterFooterSocialFilterInput = {
  image: Maybe<FileFilterInput>,
  link: Maybe<StringQueryOperatorInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterFooterSocialFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFrontmatterFooterSocialFilterInput>,
};

export type MarkdownRemarkFrontmatterNews = {
  __typename?: 'MarkdownRemarkFrontmatterNews',
  items: Maybe<Array<Maybe<MarkdownRemarkFrontmatterNewsItems>>>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterNewsFilterInput = {
  items: Maybe<MarkdownRemarkFrontmatterNewsItemsFilterListInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterNewsItems = {
  __typename?: 'MarkdownRemarkFrontmatterNewsItems',
  description: Maybe<Scalars['String']>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterNewsItemsFilterInput = {
  description: Maybe<StringQueryOperatorInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterNewsItemsFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFrontmatterNewsItemsFilterInput>,
};

export type MarkdownRemarkFrontmatterReferences = {
  __typename?: 'MarkdownRemarkFrontmatterReferences',
  items: Maybe<Array<Maybe<MarkdownRemarkFrontmatterReferencesItems>>>,
  subtitle: Maybe<Scalars['String']>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterReferencesFilterInput = {
  items: Maybe<MarkdownRemarkFrontmatterReferencesItemsFilterListInput>,
  subtitle: Maybe<StringQueryOperatorInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterReferencesItems = {
  __typename?: 'MarkdownRemarkFrontmatterReferencesItems',
  description: Maybe<Scalars['String']>,
  image: Maybe<File>,
  subtitle: Maybe<Scalars['String']>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterReferencesItemsFilterInput = {
  description: Maybe<StringQueryOperatorInput>,
  image: Maybe<FileFilterInput>,
  subtitle: Maybe<StringQueryOperatorInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterReferencesItemsFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFrontmatterReferencesItemsFilterInput>,
};

export type MarkdownRemarkFrontmatterTechnologies = {
  __typename?: 'MarkdownRemarkFrontmatterTechnologies',
  description: Maybe<Scalars['String']>,
  items: Maybe<Array<Maybe<MarkdownRemarkFrontmatterTechnologiesItems>>>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterTechnologiesFilterInput = {
  description: Maybe<StringQueryOperatorInput>,
  items: Maybe<MarkdownRemarkFrontmatterTechnologiesItemsFilterListInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterTechnologiesItems = {
  __typename?: 'MarkdownRemarkFrontmatterTechnologiesItems',
  logo: Maybe<File>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterTechnologiesItemsFilterInput = {
  logo: Maybe<FileFilterInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterTechnologiesItemsFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFrontmatterTechnologiesItemsFilterInput>,
};

export type MarkdownRemarkFrontmatterWork = {
  __typename?: 'MarkdownRemarkFrontmatterWork',
  items: Maybe<Array<Maybe<MarkdownRemarkFrontmatterWorkItems>>>,
  subtitle: Maybe<Scalars['String']>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterWorkFilterInput = {
  items: Maybe<MarkdownRemarkFrontmatterWorkItemsFilterListInput>,
  subtitle: Maybe<StringQueryOperatorInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterWorkItems = {
  __typename?: 'MarkdownRemarkFrontmatterWorkItems',
  description: Maybe<Scalars['String']>,
  logo: Maybe<File>,
  title: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterWorkItemsFilterInput = {
  description: Maybe<StringQueryOperatorInput>,
  logo: Maybe<FileFilterInput>,
  title: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFrontmatterWorkItemsFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFrontmatterWorkItemsFilterInput>,
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount',
  paragraphs: Maybe<Scalars['Int']>,
  sentences: Maybe<Scalars['Int']>,
  words: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>,
  sentences: Maybe<IntQueryOperatorInput>,
  words: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>,
  turdSize: Maybe<Scalars['Float']>,
  alphaMax: Maybe<Scalars['Float']>,
  optCurve: Maybe<Scalars['Boolean']>,
  optTolerance: Maybe<Scalars['Float']>,
  threshold: Maybe<Scalars['Int']>,
  blackOnWhite: Maybe<Scalars['Boolean']>,
  color: Maybe<Scalars['String']>,
  background: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query',
  file: Maybe<File>,
  allFile: FileConnection,
  imageSharp: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  markdownRemark: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  sitePage: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sitePlugin: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  site: Maybe<Site>,
  allSite: SiteConnection,
  instaNode: Maybe<InstaNode>,
  allInstaNode: InstaNodeConnection,
  directory: Maybe<Directory>,
  allDirectory: DirectoryConnection,
};


export type QueryFileArgs = {
  birthtime: Maybe<DateQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  ino: Maybe<IntQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  url: Maybe<StringQueryOperatorInput>,
  publicURL: Maybe<StringQueryOperatorInput>,
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  childImageSharp: Maybe<ImageSharpFilterInput>,
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>,
  sort: Maybe<FileSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  id: Maybe<StringQueryOperatorInput>,
  fixed: Maybe<ImageSharpFixedFilterInput>,
  resolutions: Maybe<ImageSharpResolutionsFilterInput>,
  fluid: Maybe<ImageSharpFluidFilterInput>,
  sizes: Maybe<ImageSharpSizesFilterInput>,
  original: Maybe<ImageSharpOriginalFilterInput>,
  resize: Maybe<ImageSharpResizeFilterInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>,
  sort: Maybe<ImageSharpSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>,
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath: Maybe<StringQueryOperatorInput>,
  fields: Maybe<MarkdownRemarkFieldsFilterInput>,
  html: Maybe<StringQueryOperatorInput>,
  htmlAst: Maybe<JsonQueryOperatorInput>,
  excerptAst: Maybe<JsonQueryOperatorInput>,
  headings: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead: Maybe<IntQueryOperatorInput>,
  tableOfContents: Maybe<StringQueryOperatorInput>,
  wordCount: Maybe<MarkdownWordCountFilterInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>,
  sort: Maybe<MarkdownRemarkSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  path: Maybe<StringQueryOperatorInput>,
  internalComponentName: Maybe<StringQueryOperatorInput>,
  component: Maybe<StringQueryOperatorInput>,
  componentChunkName: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>,
  context: Maybe<SitePageContextFilterInput>,
  pluginCreator: Maybe<SitePluginFilterInput>,
  pluginCreatorId: Maybe<StringQueryOperatorInput>,
  componentPath: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>,
  sort: Maybe<SitePageSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  resolve: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs: Maybe<StringQueryOperatorInput>,
  browserAPIs: Maybe<StringQueryOperatorInput>,
  ssrAPIs: Maybe<StringQueryOperatorInput>,
  pluginFilepath: Maybe<StringQueryOperatorInput>,
  packageJson: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>,
  sort: Maybe<SitePluginSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  port: Maybe<IntQueryOperatorInput>,
  host: Maybe<StringQueryOperatorInput>,
  polyfill: Maybe<BooleanQueryOperatorInput>,
  pathPrefix: Maybe<StringQueryOperatorInput>,
  buildTime: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>,
  sort: Maybe<SiteSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryInstaNodeArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  type: Maybe<StringQueryOperatorInput>,
  username: Maybe<StringQueryOperatorInput>,
  likes: Maybe<IntQueryOperatorInput>,
  caption: Maybe<StringQueryOperatorInput>,
  thumbnails: Maybe<InstaNodeThumbnailsFilterListInput>,
  mediaType: Maybe<StringQueryOperatorInput>,
  preview: Maybe<StringQueryOperatorInput>,
  original: Maybe<StringQueryOperatorInput>,
  timestamp: Maybe<IntQueryOperatorInput>,
  dimensions: Maybe<InstaNodeDimensionsFilterInput>,
  localFile: Maybe<FileFilterInput>
};


export type QueryAllInstaNodeArgs = {
  filter: Maybe<InstaNodeFilterInput>,
  sort: Maybe<InstaNodeSortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  sourceInstanceName: Maybe<StringQueryOperatorInput>,
  absolutePath: Maybe<StringQueryOperatorInput>,
  relativePath: Maybe<StringQueryOperatorInput>,
  extension: Maybe<StringQueryOperatorInput>,
  size: Maybe<IntQueryOperatorInput>,
  prettySize: Maybe<StringQueryOperatorInput>,
  modifiedTime: Maybe<DateQueryOperatorInput>,
  accessTime: Maybe<DateQueryOperatorInput>,
  changeTime: Maybe<DateQueryOperatorInput>,
  birthTime: Maybe<DateQueryOperatorInput>,
  root: Maybe<StringQueryOperatorInput>,
  dir: Maybe<StringQueryOperatorInput>,
  base: Maybe<StringQueryOperatorInput>,
  ext: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  relativeDirectory: Maybe<StringQueryOperatorInput>,
  dev: Maybe<IntQueryOperatorInput>,
  mode: Maybe<IntQueryOperatorInput>,
  nlink: Maybe<IntQueryOperatorInput>,
  uid: Maybe<IntQueryOperatorInput>,
  gid: Maybe<IntQueryOperatorInput>,
  rdev: Maybe<IntQueryOperatorInput>,
  blksize: Maybe<IntQueryOperatorInput>,
  ino: Maybe<IntQueryOperatorInput>,
  blocks: Maybe<IntQueryOperatorInput>,
  atimeMs: Maybe<FloatQueryOperatorInput>,
  mtimeMs: Maybe<FloatQueryOperatorInput>,
  ctimeMs: Maybe<FloatQueryOperatorInput>,
  birthtimeMs: Maybe<FloatQueryOperatorInput>,
  atime: Maybe<DateQueryOperatorInput>,
  mtime: Maybe<DateQueryOperatorInput>,
  ctime: Maybe<DateQueryOperatorInput>,
  birthtime: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>,
  sort: Maybe<DirectorySortInput>,
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>
};

export type Site = Node & {
  __typename?: 'Site',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  port: Maybe<Scalars['Int']>,
  host: Maybe<Scalars['String']>,
  polyfill: Maybe<Scalars['Boolean']>,
  pathPrefix: Maybe<Scalars['String']>,
  buildTime: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>,
  fromNow: Maybe<Scalars['Boolean']>,
  difference: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>
};

export type SiteConnection = {
  __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  __typename?: 'SiteEdge',
  next: Maybe<Site>,
  node: Site,
  previous: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  port: Maybe<IntQueryOperatorInput>,
  host: Maybe<StringQueryOperatorInput>,
  polyfill: Maybe<BooleanQueryOperatorInput>,
  pathPrefix: Maybe<StringQueryOperatorInput>,
  buildTime: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  __typename?: 'SitePage',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path: Maybe<Scalars['String']>,
  internalComponentName: Maybe<Scalars['String']>,
  component: Maybe<Scalars['String']>,
  componentChunkName: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>,
  context: Maybe<SitePageContext>,
  pluginCreator: Maybe<SitePlugin>,
  pluginCreatorId: Maybe<Scalars['String']>,
  componentPath: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  __typename?: 'SitePageContext',
  id: Maybe<Scalars['String']>,
  locale: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  locale: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge',
  next: Maybe<SitePage>,
  node: SitePage,
  previous: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  ContextLocale = 'context___locale',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsGoogleFamilies = 'pluginCreator___pluginOptions___google___families',
  PluginCreatorPluginOptionsUsername = 'pluginCreator___pluginOptions___username',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsDestinationDir = 'pluginCreator___pluginOptions___destinationDir',
  PluginCreatorPluginOptionsModulePath = 'pluginCreator___pluginOptions___modulePath',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  path: Maybe<StringQueryOperatorInput>,
  internalComponentName: Maybe<StringQueryOperatorInput>,
  component: Maybe<StringQueryOperatorInput>,
  componentChunkName: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>,
  context: Maybe<SitePageContextFilterInput>,
  pluginCreator: Maybe<SitePluginFilterInput>,
  pluginCreatorId: Maybe<StringQueryOperatorInput>,
  componentPath: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
  pluginOptions: Maybe<SitePluginPluginOptions>,
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath: Maybe<Scalars['String']>,
  packageJson: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>,
  limit: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge',
  next: Maybe<SitePlugin>,
  node: SitePlugin,
  previous: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsName = 'pluginOptions___plugins___pluginOptions___name',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsDestinationDir = 'pluginOptions___plugins___pluginOptions___destinationDir',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsGoogleFamilies = 'pluginOptions___google___families',
  PluginOptionsUsername = 'pluginOptions___username',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsDestinationDir = 'pluginOptions___destinationDir',
  PluginOptionsModulePath = 'pluginOptions___modulePath',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>,
  parent: Maybe<NodeFilterInput>,
  children: Maybe<NodeFilterListInput>,
  internal: Maybe<InternalFilterInput>,
  resolve: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs: Maybe<StringQueryOperatorInput>,
  browserAPIs: Maybe<StringQueryOperatorInput>,
  ssrAPIs: Maybe<StringQueryOperatorInput>,
  pluginFilepath: Maybe<StringQueryOperatorInput>,
  packageJson: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson',
  name: Maybe<Scalars['String']>,
  description: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
  main: Maybe<Scalars['String']>,
  license: Maybe<Scalars['String']>,
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies',
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies',
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  description: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
  main: Maybe<StringQueryOperatorInput>,
  license: Maybe<StringQueryOperatorInput>,
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies',
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions',
  plugins: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  name: Maybe<Scalars['String']>,
  short_name: Maybe<Scalars['String']>,
  start_url: Maybe<Scalars['String']>,
  background_color: Maybe<Scalars['String']>,
  theme_color: Maybe<Scalars['String']>,
  display: Maybe<Scalars['String']>,
  icon: Maybe<Scalars['String']>,
  crossOrigin: Maybe<Scalars['String']>,
  google: Maybe<SitePluginPluginOptionsGoogle>,
  username: Maybe<Scalars['String']>,
  path: Maybe<Scalars['String']>,
  maxWidth: Maybe<Scalars['Int']>,
  destinationDir: Maybe<Scalars['String']>,
  modulePath: Maybe<Scalars['String']>,
  pathCheck: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  name: Maybe<StringQueryOperatorInput>,
  short_name: Maybe<StringQueryOperatorInput>,
  start_url: Maybe<StringQueryOperatorInput>,
  background_color: Maybe<StringQueryOperatorInput>,
  theme_color: Maybe<StringQueryOperatorInput>,
  display: Maybe<StringQueryOperatorInput>,
  icon: Maybe<StringQueryOperatorInput>,
  crossOrigin: Maybe<StringQueryOperatorInput>,
  google: Maybe<SitePluginPluginOptionsGoogleFilterInput>,
  username: Maybe<StringQueryOperatorInput>,
  path: Maybe<StringQueryOperatorInput>,
  maxWidth: Maybe<IntQueryOperatorInput>,
  destinationDir: Maybe<StringQueryOperatorInput>,
  modulePath: Maybe<StringQueryOperatorInput>,
  pathCheck: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsGoogle = {
  __typename?: 'SitePluginPluginOptionsGoogle',
  families: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsGoogleFilterInput = {
  families: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins',
  resolve: Maybe<Scalars['String']>,
  id: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  version: Maybe<Scalars['String']>,
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve: Maybe<StringQueryOperatorInput>,
  id: Maybe<StringQueryOperatorInput>,
  name: Maybe<StringQueryOperatorInput>,
  version: Maybe<StringQueryOperatorInput>,
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  browserAPIs: Maybe<StringQueryOperatorInput>,
  ssrAPIs: Maybe<StringQueryOperatorInput>,
  pluginFilepath: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions',
  name: Maybe<Scalars['String']>,
  maxWidth: Maybe<Scalars['Int']>,
  destinationDir: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  name: Maybe<StringQueryOperatorInput>,
  maxWidth: Maybe<IntQueryOperatorInput>,
  destinationDir: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>,
  ne: Maybe<Scalars['String']>,
  in: Maybe<Array<Maybe<Scalars['String']>>>,
  nin: Maybe<Array<Maybe<Scalars['String']>>>,
  regex: Maybe<Scalars['String']>,
  glob: Maybe<Scalars['String']>,
};
