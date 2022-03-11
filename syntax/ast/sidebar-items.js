initSidebarItems({"enum":[["Adt",""],["ArithOp",""],["ArrayExprKind",""],["AssocItem",""],["AttrKind",""],["BinaryOp",""],["BlockModifier",""],["CallableExpr",""],["CmpOp",""],["CommentPlacement",""],["CommentShape",""],["ElseBranch",""],["Expr",""],["ExternItem",""],["FieldKind",""],["FieldList",""],["GenericArg",""],["GenericParam",""],["Item",""],["LiteralKind",""],["LogicOp",""],["Macro",""],["NameLike",""],["NameOrNameRef",""],["Ordering",""],["Pat",""],["PathSegmentKind",""],["Radix",""],["RangeOp",""],["SelfParamKind",""],["Stmt",""],["StructKind",""],["Type",""],["TypeBoundKind",""],["TypeOrConstParam",""],["UnaryOp",""],["VisibilityKind",""]],"mod":[["edit","This module contains functions for editing syntax trees. As the trees are immutable, all function here return a fresh copy of the tree, instead of doing an in-place modification."],["edit_in_place","Structural editing for ast."],["make","This module contains free-standing functions for creating AST fragments out of smaller pieces."]],"struct":[["Abi",""],["AnyHasArgList",""],["AnyHasAttrs",""],["AnyHasDocComments",""],["AnyHasGenericParams",""],["AnyHasLoopBody",""],["AnyHasModuleItem",""],["AnyHasName",""],["AnyHasTypeBounds",""],["AnyHasVisibility",""],["ArgList",""],["ArrayExpr",""],["ArrayType",""],["AssocItemList",""],["AssocTypeArg",""],["AstChildren","An iterator over `SyntaxNode` children of a particular AST type."],["Attr",""],["AttrDocCommentIter",""],["AwaitExpr",""],["BinExpr",""],["BlockExpr",""],["BoxExpr",""],["BoxPat",""],["BreakExpr",""],["ByteString",""],["CallExpr",""],["CastExpr",""],["ClosureExpr",""],["Comment",""],["CommentKind",""],["Const",""],["ConstArg",""],["ConstBlockPat",""],["ConstParam",""],["ContinueExpr",""],["DocCommentIter",""],["DynTraitType",""],["Enum",""],["ExprStmt",""],["ExternBlock",""],["ExternCrate",""],["ExternItemList",""],["FieldExpr",""],["FloatNumber",""],["Fn",""],["FnPtrType",""],["ForExpr",""],["ForType",""],["GenericArgList",""],["GenericParamList",""],["Ident",""],["IdentPat",""],["IfExpr",""],["Impl",""],["ImplTraitType",""],["IndexExpr",""],["InferType",""],["IntNumber",""],["ItemList",""],["Label",""],["LetElse",""],["LetExpr",""],["LetStmt",""],["Lifetime",""],["LifetimeArg",""],["LifetimeParam",""],["Literal",""],["LiteralPat",""],["LoopExpr",""],["MacroCall",""],["MacroDef",""],["MacroItems",""],["MacroPat",""],["MacroRules",""],["MacroStmts",""],["MacroType",""],["MatchArm",""],["MatchArmList",""],["MatchExpr",""],["MatchGuard",""],["Meta",""],["MethodCallExpr",""],["Module",""],["Name",""],["NameRef",""],["NeverType",""],["OrPat",""],["Param",""],["ParamList",""],["ParenExpr",""],["ParenPat",""],["ParenType",""],["Path",""],["PathExpr",""],["PathPat",""],["PathSegment",""],["PathType",""],["PrefixExpr",""],["PtrType",""],["QuoteOffsets",""],["RangeExpr",""],["RangePat",""],["RecordExpr",""],["RecordExprField",""],["RecordExprFieldList",""],["RecordField",""],["RecordFieldList",""],["RecordPat",""],["RecordPatField",""],["RecordPatFieldList",""],["RefExpr",""],["RefPat",""],["RefType",""],["Rename",""],["RestPat",""],["RetType",""],["ReturnExpr",""],["SelfParam",""],["SlicePat",""],["SlicePatComponents",""],["SliceType",""],["SourceFile",""],["Static",""],["StmtList",""],["String",""],["Struct",""],["TokenTree",""],["Trait",""],["TryExpr",""],["TupleExpr",""],["TupleField",""],["TupleFieldList",""],["TuplePat",""],["TupleStructPat",""],["TupleType",""],["TypeAlias",""],["TypeArg",""],["TypeBound",""],["TypeBoundList",""],["TypeParam",""],["UnderscoreExpr",""],["Union",""],["Use",""],["UseTree",""],["UseTreeList",""],["Variant",""],["VariantList",""],["Visibility",""],["WhereClause",""],["WherePred",""],["WhileExpr",""],["Whitespace",""],["WildcardPat",""],["YieldExpr",""]],"trait":[["AstNode","The main trait to go from untyped `SyntaxNode`  to a typed ast. The conversion itself has zero runtime cost: ast and syntax nodes have exactly the same representation: a pointer to the tree root and a pointer to the node itself."],["AstToken","Like `AstNode`, but wraps tokens rather than interior nodes."],["HasArgList",""],["HasAttrs",""],["HasDocComments",""],["HasGenericParams",""],["HasLoopBody",""],["HasModuleItem",""],["HasName",""],["HasTypeBounds",""],["HasVisibility",""],["IsString",""]]});