declare class $l {
    convertValue(t: any, e?: string): any;
    convertObject(t: any, e: any): {};
    convertGeoPoint(t: any): kh;
    convertArray(t: any, e: any): any;
    convertServerTimestamp(t: any, e: any): any;
    convertTimestamp(t: any): nt;
    convertDocumentKey(t: any, e: any): ct;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an aggregation that can be performed by Firestore.
 */
declare class Vh {
    /**
     * Create a new AggregateField<T>
     * @param _aggregateType Specifies the type of aggregation operation to perform.
     * @param _internalFieldPath Optionally specifies the field that is aggregated.
     * @internal
     */
    constructor(t: string | undefined, e: any);
    _aggregateType: string;
    _internalFieldPath: any;
    /** A type string to uniquely identify instances of this class. */
    type: string;
}
/**
 * The results of executing an aggregation query.
 */ declare class Sh {
    /** @hideconstructor */
    constructor(t: any, e: any, n: any);
    _userDataWriter: any;
    _data: any;
    /** A type string to uniquely identify instances of this class. */
    type: string;
    query: any;
    /**
     * Returns the results of the aggregations performed over the underlying
     * query.
     *
     * The keys of the returned object will be the same as those of the
     * `AggregateSpec` object specified to the aggregation method, and the values
     * will be the corresponding aggregation result.
     *
     * @returns The results of the aggregations performed over the underlying
     * query.
     */ data(): any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing an array of bytes.
 */ declare class Dh {
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */ static fromBase64String(t: any): Dh;
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */ static fromUint8Array(t: any): Dh;
    /** @hideconstructor */
    constructor(t: any);
    _byteString: any;
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */ toBase64(): any;
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */ toUint8Array(): any;
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */ toString(): string;
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */ isEqual(t: any): any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Constant used to indicate the LRU garbage collection should be disabled.
 * Set this value as the `cacheSizeBytes` on the settings passed to the
 * {@link Firestore} instance.
 */ declare const lh: -1;
/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */ declare class nh extends eh {
    _path: any;
    /** The collection's identifier. */ get id(): any;
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */ get path(): any;
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */ get parent(): th | null;
    withConverter(t: any): nh;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ declare class th {
    /** @hideconstructor */
    constructor(t: any, e: any, n: any);
    converter: any;
    _key: any;
    /** The type of this Firestore reference. */
    type: string;
    firestore: any;
    get _path(): any;
    /**
     * The document's identifier within its collection.
     */ get id(): any;
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */ get path(): any;
    /**
     * The collection this `DocumentReference` belongs to.
     */ get parent(): nh;
    withConverter(t: any): th;
}
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ declare class Ql extends ul {
    /** @hideconstructor protected */
    constructor(t: any, e: any, n: any, s: any, i: any, r: any);
    _firestoreImpl: any;
    metadata: any;
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */ data(t?: {}): any;
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    get(t: any, e?: {}): any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ declare class Ch {
    /**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t: any[]);
    _internalPath: ut;
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */ isEqual(t: any): boolean;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ declare class Nh {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
    constructor(t: any);
    _methodName: any;
}
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */ declare class fh extends Za {
    _queue: ch;
    _persistenceKey: any;
    _terminate(): any;
}
/** An error returned by a Firestore operation. */ declare class L extends c {
    /** @hideconstructor */
    constructor(t: any, e: any);
    code: any;
    message: any;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ declare class kh {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t: any, e: any);
    _lat: any;
    _long: any;
    /**
     * The latitude of this `GeoPoint` instance.
     */ get latitude(): any;
    /**
     * The longitude of this `GeoPoint` instance.
     */ get longitude(): any;
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */ isEqual(t: any): boolean;
    /** Returns a JSON-serializable representation of this GeoPoint. */ toJSON(): {
        latitude: any;
        longitude: any;
    };
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */ _compareTo(t: any): 0 | 1 | -1;
}
declare class hh {
    _progressObserver: {};
    _taskCompletionResolver: q;
    _lastProgress: {
        taskState: string;
        totalBytes: number;
        totalDocuments: number;
        bytesLoaded: number;
        documentsLoaded: number;
    };
    /**
     * Registers functions to listen to bundle loading progress events.
     * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
     *   each time a Firestore document is loaded from the bundle.
     * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
     *   error, and there should be no more updates after this.
     * @param complete - Called when the loading task is complete.
     */ onProgress(t: any, e: any, n: any): void;
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
     *
     * @param onRejected - Called when an error occurs during bundle loading.
     */ catch(t: any): Promise<any>;
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
     *
     * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
     *   The update will always have its `taskState` set to `"Success"`.
     * @param onRejected - Called when an error occurs during bundle loading.
     */ then(t: any, e: any): Promise<any>;
    /**
     * Notifies all observers that bundle loading has completed, with a provided
     * `LoadBundleTaskProgress` object.
     *
     * @private
     */ private _completeWith;
    /**
     * Notifies all observers that bundle loading has failed, with a provided
     * `Error` as the reason.
     *
     * @private
     */ private _failWith;
    /**
     * Notifies a progress update of loading a bundle.
     * @param progress - The new progress.
     *
     * @private
     */ private _updateProgress;
}
/**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ declare class eh {
    /** @hideconstructor protected */
    constructor(t: any, e: any, n: any);
    converter: any;
    _query: any;
    /** The type of this Firestore reference. */
    type: string;
    firestore: any;
    withConverter(t: any): eh;
}
/**
 * A `QueryCompositeFilterConstraint` is used to narrow the set of documents
 * returned by a Firestore query by performing the logical OR or AND of multiple
 * {@link QueryFieldFilterConstraint}s or {@link QueryCompositeFilterConstraint}s.
 * `QueryCompositeFilterConstraint`s are created by invoking {@link or} or
 * {@link and} and can then be passed to {@link (query:1)} to create a new query
 * instance that also contains the `QueryCompositeFilterConstraint`.
 */ declare class ml extends ll {
    static _create(t: any, e: any): ml;
    /**
     * @internal
     */
    constructor(t: any, e: any);
    type: any;
    _queryConstraints: any;
    _parse(t: any): any;
    _apply(t: any): any;
    _getQueryConstraints(): any;
    _getOperator(): "and" | "or";
}
/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
 * (endBefore:1)}, {@link (endAt:1)}, {@link limit}, {@link limitToLast} and
 * can then be passed to {@link (query:1)} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ declare class fl extends ll {
}
/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ declare class zl extends Ql {
}
/**
 * A `QueryEndAtConstraint` is used to exclude documents from the end of a
 * result set returned by a Firestore query.
 * `QueryEndAtConstraint`s are created by invoking {@link (endAt:1)} or
 * {@link (endBefore:1)} and can then be passed to {@link (query:1)} to create a new
 * query instance that also contains this `QueryEndAtConstraint`.
 */ declare class Pl extends fl {
    static _create(t: any, e: any, n: any): Pl;
    /**
     * @internal
     */
    constructor(t: any, e: any, n: any);
    type: any;
    _docOrFields: any;
    _inclusive: any;
    _apply(t: any): eh;
}
/**
 * A `QueryFieldFilterConstraint` is used to narrow the set of documents returned by
 * a Firestore query by filtering on one or more document fields.
 * `QueryFieldFilterConstraint`s are created by invoking {@link where} and can then
 * be passed to {@link (query:1)} to create a new query instance that also contains
 * this `QueryFieldFilterConstraint`.
 */ declare class wl extends fl {
    static _create(t: any, e: any, n: any): wl;
    /**
     * @internal
     */
    constructor(t: any, e: any, n: any);
    _field: any;
    _op: any;
    _value: any;
    /** The type of this query constraint */
    type: string;
    _apply(t: any): eh;
    _parse(t: any): dn | Rn | Dn;
}
/**
 * A `QueryLimitConstraint` is used to limit the number of documents returned by
 * a Firestore query.
 * `QueryLimitConstraint`s are created by invoking {@link limit} or
 * {@link limitToLast} and can then be passed to {@link (query:1)} to create a new
 * query instance that also contains this `QueryLimitConstraint`.
 */ declare class Tl extends fl {
    static _create(t: any, e: any, n: any): Tl;
    /**
     * @internal
     */
    constructor(t: any, e: any, n: any);
    type: any;
    _limit: any;
    _limitType: any;
    _apply(t: any): eh;
}
/**
 * A `QueryOrderByConstraint` is used to sort the set of documents returned by a
 * Firestore query. `QueryOrderByConstraint`s are created by invoking
 * {@link orderBy} and can then be passed to {@link (query:1)} to create a new query
 * instance that also contains this `QueryOrderByConstraint`.
 *
 * Note: Documents that do not contain the orderBy field will not be present in
 * the query result.
 */ declare class pl extends fl {
    static _create(t: any, e: any): pl;
    /**
     * @internal
     */
    constructor(t: any, e: any);
    _field: any;
    _direction: any;
    /** The type of this query constraint */
    type: string;
    _apply(t: any): eh;
}
/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */ declare class jl {
    /** @hideconstructor */
    constructor(t: any, e: any, n: any, s: any);
    _firestore: any;
    _userDataWriter: any;
    _snapshot: any;
    metadata: Gl;
    query: any;
    /** An array of all the documents in the `QuerySnapshot`. */ get docs(): any[];
    /** The number of documents in the `QuerySnapshot`. */ get size(): any;
    /** True if there are no documents in the `QuerySnapshot`. */ get empty(): boolean;
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */ forEach(t: any, e: any): void;
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */ docChanges(t?: {}): any;
    _cachedChanges: any;
    _cachedChangesIncludeMetadataChanges: any;
}
/**
 * A `QueryStartAtConstraint` is used to exclude documents from the start of a
 * result set returned by a Firestore query.
 * `QueryStartAtConstraint`s are created by invoking {@link (startAt:1)} or
 * {@link (startAfter:1)} and can then be passed to {@link (query:1)} to create a
 * new query instance that also contains this `QueryStartAtConstraint`.
 */ declare class Rl extends fl {
    static _create(t: any, e: any, n: any): Rl;
    /**
     * @internal
     */
    constructor(t: any, e: any, n: any);
    type: any;
    _docOrFields: any;
    _inclusive: any;
    _apply(t: any): eh;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ declare class Gl {
    /** @hideconstructor */
    constructor(t: any, e: any);
    hasPendingWrites: any;
    fromCache: any;
    /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */ isEqual(t: any): boolean;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */
declare class nt {
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */ static now(): nt;
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */ static fromDate(t: any): nt;
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */ static fromMillis(t: any): nt;
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(t: any, e: any);
    seconds: any;
    nanoseconds: any;
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */ toDate(): Date;
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */ toMillis(): number;
    _compareTo(t: any): 0 | 1 | -1;
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */ isEqual(t: any): boolean;
    /** Returns a textual representation of this `Timestamp`. */ toString(): string;
    /** Returns a JSON-serializable representation of this `Timestamp`. */ toJSON(): {
        seconds: any;
        nanoseconds: any;
    };
    /**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */ valueOf(): string;
}
declare const vf_base: {
    new (t: any, e: any): {
        _firestore: any;
        _transaction: any;
        _dataReader: Lh;
        /**
         * Reads the document referenced by the provided {@link DocumentReference}.
         *
         * @param documentRef - A reference to the document to be read.
         * @returns A `DocumentSnapshot` with the read data.
         */ get(t: any): any;
        set(t: any, e: any, n: any): any;
        update(t: any, e: any, n: any, ...s: any[]): any;
        /**
         * Deletes the document referred to by the provided {@link DocumentReference}.
         *
         * @param documentRef - A reference to the document to be deleted.
         * @returns This `Transaction` instance. Used for chaining method calls.
         */ delete(t: any): any;
    };
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */
declare class vf extends vf_base {
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */
declare class Af {
    /** @hideconstructor */
    constructor(t: any, e: any);
    _firestore: any;
    _commitHandler: any;
    _mutations: any[];
    _committed: boolean;
    _dataReader: Lh;
    set(t: any, e: any, n: any): Af;
    update(t: any, e: any, n: any, ...s: any[]): Af;
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */ delete(t: any): Af;
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A `Promise` resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */ commit(): any;
    _verifyNotCommitted(): void;
}
/** The default database name for a project. */
/**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */
declare class Oe {
    static empty(): Oe;
    constructor(t: any, e: any);
    projectId: any;
    database: any;
    get isDefaultDatabase(): boolean;
    isEqual(t: any): boolean;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */ declare class ct {
    static fromPath(t: any): ct;
    static fromName(t: any): ct;
    static empty(): ct;
    static comparator(t: any, e: any): 0 | 1 | -1;
    static isDocumentKey(t: any): boolean;
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */ static fromSegments(t: any): ct;
    constructor(t: any);
    path: any;
    get collectionGroup(): any;
    /** Returns true if the document is in the specified collectionId. */ hasCollectionId(t: any): boolean;
    /** Returns the collection group (i.e. the name of the parent collection) for this key. */ getCollectionGroup(): any;
    /** Returns the fully qualified path to the parent collection. */ getCollectionPath(): any;
    isEqual(t: any): boolean;
    toString(): any;
}
/**
 * An AppCheck token provider that always yields an empty token.
 * @internal
 */ declare class J {
    getToken(): Promise<W>;
    invalidateToken(): void;
    start(t: any, e: any): void;
    shutdown(): void;
}
/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */ declare class K {
    getToken(): Promise<null>;
    invalidateToken(): void;
    start(t: any, e: any): void;
    shutdown(): void;
}
/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */ declare class ut extends it {
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */ static isValidIdentifier(t: any): boolean;
    /**
     * The field designating the key of a document.
     */ static keyField(): ut;
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */ static fromServerFormat(t: any): ut;
    static emptyPath(): ut;
    construct(t: any, e: any, n: any): ut;
    canonicalString(): any;
    toString(): any;
    /**
     * Returns true if this field references the key of a document.
     */ isKeyField(): boolean;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Manages "testing hooks", hooks into the internals of the SDK to verify
 * internal state and events during integration tests. Do not use this class
 * except for testing purposes.
 *
 * There are two ways to retrieve the global singleton instance of this class:
 * 1. The `instance` property, which returns null if the global singleton
 *      instance has not been created. Use this property if the caller should
 *      "do nothing" if there are no testing hooks registered, such as when
 *      delivering an event to notify registered callbacks.
 * 2. The `getOrCreateInstance()` method, which creates the global singleton
 *      instance if it has not been created. Use this method if the instance is
 *      needed to, for example, register a callback.
 *
 * @internal
 */
declare class ui {
    /**
     * Returns the singleton instance of this class, or null if it has not been
     * initialized.
     */ static get instance(): any;
    /**
     * Returns the singleton instance of this class, creating it if is has never
     * been created before.
     */ static getOrCreateInstance(): any;
    onExistenceFilterMismatchCallbacks: Map<any, any>;
    /**
     * Registers a callback to be notified when an existence filter mismatch
     * occurs in the Watch listen stream.
     *
     * The relative order in which callbacks are notified is unspecified; do not
     * rely on any particular ordering. If a given callback is registered multiple
     * times then it will be notified multiple times, once per registration.
     *
     * @param callback the callback to invoke upon existence filter mismatch.
     *
     * @return a function that, when called, unregisters the given callback; only
     * the first invocation of the returned function does anything; all subsequent
     * invocations do nothing.
     */ onExistenceFilterMismatch(t: any): () => boolean;
    /**
     * Invokes all currently-registered `onExistenceFilterMismatch` callbacks.
     * @param info Information about the existence filter mismatch.
     */ notifyOnExistenceFilterMismatch(t: any): void;
}
declare function Ha(t: any, e: any): any;
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * The code of callsites invoking this function are stripped out in production
 * builds. Any side-effects of code within the debugAssert() invocation will not
 * happen in this case.
 *
 * @internal
 */ declare function M(t: any, e: any): void;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/** True if and only if the Base64 conversion functions are available. */
declare function ve(): boolean;
/**
 * @internal
 */ declare function N(t: any, ...e: any[]): void;
/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */ declare function Qa(t: any, e: any, n: any, s: any): void;
/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */ declare function uf(t: any, e: any): Promise<th>;
/**
 * Compares two 'AggregateField` instances for equality.
 *
 * @param left Compare this AggregateField to the `right`.
 * @param right Compare this AggregateField to the `left`.
 * @internal TODO (sum/avg) remove when public
 */ declare function Ul(t: any, e: any): boolean;
/**
 * Compares two `AggregateQuerySnapshot` instances for equality.
 *
 * Two `AggregateQuerySnapshot` instances are considered "equal" if they have
 * underlying queries that compare equal, and the same data.
 *
 * @param left - The first `AggregateQuerySnapshot` to compare.
 * @param right - The second `AggregateQuerySnapshot` to compare.
 *
 * @returns `true` if the objects are "equal", as defined above, or `false`
 * otherwise.
 */ declare function Kl(t: any, e: any): boolean;
/**
 * Creates a new {@link QueryCompositeFilterConstraint} that is a conjunction of
 * the given filter constraints. A conjunction filter includes a document if it
 * satisfies all of the given filters.
 *
 * @param queryConstraints - Optional. The list of
 * {@link QueryFilterConstraint}s to perform a conjunction for. These must be
 * created with calls to {@link where}, {@link or}, or {@link and}.
 * @returns The newly created {@link QueryCompositeFilterConstraint}.
 */ declare function yl(...t: any[]): ml;
/**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ declare function Df(...t: any[]): jh;
/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */ declare function Sf(...t: any[]): zh;
/**
 * Create an AggregateField object that can be used to compute the average of
 * a specified field over a range of documents in the result set of a query.
 * @param field Specifies the field to average across the result set.
 * @internal TODO (sum/avg) remove when public
 */ declare function Ll(t: any): Vh;
/**
 * Clears the persistent storage. This includes pending writes and cached
 * documents.
 *
 * Must be called while the {@link Firestore} instance is not started (after the app is
 * terminated or when the app is first initialized). On startup, this function
 * must be called before other functions (other than {@link
 * initializeFirestore} or {@link (getFirestore:1)})). If the {@link Firestore}
 * instance is still running, the promise will be rejected with the error code
 * of `failed-precondition`.
 *
 * Note: `clearIndexedDbPersistence()` is primarily intended to help write
 * reliable tests that use Cloud Firestore. It uses an efficient mechanism for
 * dropping existing data but does not attempt to securely overwrite or
 * otherwise make cached data unrecoverable. For applications that are sensitive
 * to the disclosure of cached data in between user sessions, we strongly
 * recommend not enabling persistence at all.
 *
 * @param firestore - The {@link Firestore} instance to clear persistence for.
 * @returns A `Promise` that is resolved when the persistent storage is
 * cleared. Otherwise, the promise is rejected with an error.
 */ declare function Ih(t: any): Promise<any>;
declare function sh(t: any, e: any, ...n: any[]): nh;
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root `Firestore` instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ declare function ih(t: any, e: any): eh;
/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */ declare function Xa(t: any, e: any, n: any, s?: {}): void;
/**
 * Create an AggregateField object that can be used to compute the count of
 * documents in the result set of a query.
 * @internal TODO (sum/avg) remove when public
 */ declare function ql(): Vh;
/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ declare function of(t: any): Promise<any>;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */ declare function Pf(): Kh;
/**
 * Disables network usage for this instance. It can be re-enabled via {@link
 * enableNetwork}. While the network is disabled, any snapshot listeners,
 * `getDoc()` or `getDocs()` calls will return results from cache, and any write
 * operations will be queued until the network is restored.
 *
 * @returns A `Promise` that is resolved once the network has been disabled.
 */ declare function Ah(t: any): any;
declare function rh(t: any, e: any, ...n: any[]): th;
/**
 * Returns a special sentinel `FieldPath` to refer to the ID of a document.
 * It can be used in queries to sort or filter by the document ID.
 */ declare function xh(): Ch;
/**
 * Attempts to enable persistent storage, if possible.
 *
 * Must be called before any other functions (other than
 * {@link initializeFirestore}, {@link (getFirestore:1)} or
 * {@link clearIndexedDbPersistence}.
 *
 * If this fails, `enableIndexedDbPersistence()` will reject the promise it
 * returns. Note that even after this failure, the {@link Firestore} instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The {@link Firestore} instance to enable persistence for.
 * @param persistenceSettings - Optional settings object to configure
 * persistence.
 * @returns A `Promise` that represents successfully enabling persistent storage.
 * @deprecated This function will be removed in a future major release. Instead, set
 * `FirestoreSettings.cache` to an instance of `IndexedDbLocalCache` to
 * turn on IndexedDb cache. Calling this function when `FirestoreSettings.cache`
 * is already specified will throw an exception.
 */ declare function gh(t: any, e: any): any;
/**
 * Attempts to enable multi-tab persistent storage, if possible. If enabled
 * across all tabs, all operations share access to local persistence, including
 * shared execution of queries and latency-compensated local document updates
 * across all connected instances.
 *
 * If this fails, `enableMultiTabIndexedDbPersistence()` will reject the promise
 * it returns. Note that even after this failure, the {@link Firestore} instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab and
 *     multi-tab is not enabled.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The {@link Firestore} instance to enable persistence for.
 * @returns A `Promise` that represents successfully enabling persistent
 * storage.
 * @deprecated This function will be removed in a future major release. Instead, set
 * `FirestoreSettings.cache` to an instance of `IndexedDbLocalCache` to
 * turn on indexeddb cache. Calling this function when `FirestoreSettings.cache`
 * is already specified will throw an exception.
 */ declare function yh(t: any): any;
/**
 * Re-enables use of the network for this {@link Firestore} instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A `Promise` that is resolved once the network has been enabled.
 */ declare function Eh(t: any): any;
declare function Sl(...t: any[]): Pl;
declare function Vl(...t: any[]): Pl;
/**
 * @internal
 */ declare function _h(t: any): any;
/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */ declare function hf(t: any, e: any): Promise<any>;
/**
 * Calculates the specified aggregations over the documents in the result
 * set of the given query, without actually downloading the documents.
 *
 * Using this function to perform aggregations is efficient because only the
 * final aggregation values, not the documents' data, is downloaded. This
 * function can even perform aggregations of the documents if the result set
 * would be prohibitively large to download entirely (e.g. thousands of documents).
 *
 * The result received from the server is presented, unaltered, without
 * considering any local state. That is, documents in the local cache are not
 * taken into consideration, neither are local modifications not yet
 * synchronized with the server. Previously-downloaded results, if any, are not
 * used: every request using this source necessarily involves a round trip to
 * the server.
 *
 * @param query The query whose result set to aggregate over.
 * @param aggregateSpec An `AggregateSpec` object that specifies the aggregates
 * to perform over the result set. The AggregateSpec specifies aliases for each
 * aggregate, which can be used to retrieve the aggregate result.
 * @example
 * ```typescript
 * const aggregateSnapshot = await getAggregateFromServer(query, {
 *   countOfDocs: count(),
 *   totalHours: sum('hours'),
 *   averageScore: average('score')
 * });
 *
 * const countOfDocs: number = aggregateSnapshot.data().countOfDocs;
 * const totalHours: number = aggregateSnapshot.data().totalHours;
 * const averageScore: number | null = aggregateSnapshot.data().averageScore;
 * ```
 * @internal TODO (sum/avg) remove when public
 */ declare function df(t: any, e: any): Promise<Sh>;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Calculates the number of documents in the result set of the given query,
 * without actually downloading the documents.
 *
 * Using this function to count the documents is efficient because only the
 * final count, not the documents' data, is downloaded. This function can even
 * count the documents if the result set would be prohibitively large to
 * download entirely (e.g. thousands of documents).
 *
 * The result received from the server is presented, unaltered, without
 * considering any local state. That is, documents in the local cache are not
 * taken into consideration, neither are local modifications not yet
 * synchronized with the server. Previously-downloaded results, if any, are not
 * used: every request using this source necessarily involves a round trip to
 * the server.
 *
 * @param query - The query whose result set size to calculate.
 * @returns A Promise that will be resolved with the count; the count can be
 * retrieved from `snapshot.data().count`, where `snapshot` is the
 * `AggregateQuerySnapshot` to which the returned Promise resolves.
 */ declare function ff(t: any): Promise<Sh>;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ declare function Jl(t: any): Promise<Ql>;
/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A `Promise` resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ declare function Zl(t: any): Promise<Ql>;
/**
 * Reads the document referred to by this `DocumentReference` from the server.
 * Returns an error if the network is not available.
 *
 * @returns A `Promise` resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ declare function Xl(t: any): Promise<Ql>;
/**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */ declare function tf(t: any): Promise<jl>;
/**
 * Executes the query and returns the results as a `QuerySnapshot` from cache.
 * Returns an empty result set if no documents matching the query are currently
 * cached.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */ declare function ef(t: any): Promise<jl>;
/**
 * Executes the query and returns the results as a `QuerySnapshot` from the
 * server. Returns an error if the network is not available.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */ declare function nf(t: any): Promise<jl>;
declare function wh(e: any, n: any): import("../src").Firestore;
/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ declare function Cf(t: any): Wh;
/**
 * Initializes a new instance of {@link Firestore} with the provided settings.
 * Can only be called before any other function, including
 * {@link (getFirestore:1)}. If the custom settings are empty, this function is
 * equivalent to calling {@link (getFirestore:1)}.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} with which the {@link Firestore} instance will
 * be associated.
 * @param settings - A settings object to configure the {@link Firestore} instance.
 * @param databaseId - The name of database.
 * @returns A newly initialized {@link Firestore} instance.
 */ declare function dh(t: any, e: any, n: any): import("../src").Firestore;
/**
 * Creates a {@link QueryLimitConstraint} that only returns the first matching
 * documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link QueryLimitConstraint}.
 */ declare function El(t: any): Tl;
/**
 * Creates a {@link QueryLimitConstraint} that only returns the last matching
 * documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link QueryLimitConstraint}.
 */ declare function Al(t: any): Tl;
/**
 * Loads a Firestore bundle into the local cache.
 *
 * @param firestore - The {@link Firestore} instance to load bundles for.
 * @param bundleData - An object representing the bundle to be loaded. Valid
 * objects are `ArrayBuffer`, `ReadableStream<Uint8Array>` or `string`.
 *
 * @returns A `LoadBundleTask` object, which notifies callers with progress
 * updates, and completion or error events. It can be used as a
 * `Promise<LoadBundleTaskProgress>`.
 */ declare function vh(t: any, e: any): hh;
/**
 * Creates an instance of `MemoryLocalCache`. The instance can be set to
 * `FirestoreSettings.cache` to tell the SDK which cache layer to use.
 */ declare function mf(): wf;
/**
 * Reads a Firestore {@link Query} from local cache, identified by the given
 * name.
 *
 * The named queries are packaged  into bundles on the server side (along
 * with resulting documents), and loaded to local cache using `loadBundle`. Once
 * in local cache, use this method to extract a {@link Query} by name.
 *
 * @param firestore - The {@link Firestore} instance to read the query from.
 * @param name - The name of the query.
 * @returns A `Promise` that is resolved with the Query or `null`.
 */ declare function bh(t: any, e: any): any;
declare function cf(t: any, ...e: any[]): () => void;
declare function af(t: any, e: any): () => void;
/**
 * Creates a new {@link QueryCompositeFilterConstraint} that is a disjunction of
 * the given filter constraints. A disjunction filter includes a document if it
 * satisfies any of the given filters.
 *
 * @param queryConstraints - Optional. The list of
 * {@link QueryFilterConstraint}s to perform a disjunction for. These must be
 * created with calls to {@link where}, {@link or}, or {@link and}.
 * @returns The newly created {@link QueryCompositeFilterConstraint}.
 */ declare function gl(...t: any[]): ml;
/**
 * Creates a {@link QueryOrderByConstraint} that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * Note: Documents that do not contain the specified field will not be present
 * in the query result.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created {@link QueryOrderByConstraint}.
 */ declare function Il(t: any, e?: string): pl;
/**
 * Creates an instance of `PersistentLocalCache`. The instance can be set to
 * `FirestoreSettings.cache` to tell the SDK which cache layer to use.
 */ declare function gf(t: any): _f;
/**
 * Creates an instance of `PersistentMultipleTabManager`.
 */ declare function Tf(): pf;
/**
 * Creates an instance of `PersistentSingleTabManager`.
 *
 * @param settings Configures the created tab manager.
 */ declare function If(t: any): yf;
declare function dl(t: any, e: any, ...n: any[]): any;
/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ declare function uh(t: any, e: any): boolean;
/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ declare function oh(t: any, e: any): boolean;
/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @param options - An options object to configure maximum number of attempts to
 * commit.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */ declare function bf(t: any, e: any, n: any): Promise<any>;
/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */ declare function Vf(): Qh;
declare function sf(t: any, e: any, n: any): Promise<any>;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare function Nf(t: any, e: any): any;
/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ declare function D(t: any): void;
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ declare function Hl(t: any, e: any): any;
declare function bl(...t: any[]): Rl;
declare function vl(...t: any[]): Rl;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Create an AggregateField object that can be used to compute the sum of
 * a specified field over a range of documents in the result set of a query.
 * @param field Specifies the field to sum across the result set.
 * @internal TODO (sum/avg) remove when public
 */ declare function Bl(t: any): Vh;
/**
 * Terminates the provided {@link Firestore} instance.
 *
 * After calling `terminate()` only the `clearIndexedDbPersistence()` function
 * may be used. Any other function will throw a `FirestoreError`.
 *
 * To restart after termination, create a new instance of FirebaseFirestore with
 * {@link (getFirestore:1)}.
 *
 * Termination does not cancel any pending writes, and any promises that are
 * awaiting a response from the server will not be resolved. If you have
 * persistence enabled, the next time you start this instance, it will resume
 * sending these writes to the server.
 *
 * Note: Under normal circumstances, calling `terminate()` is not required. This
 * function is useful only when you want to force this instance to release all
 * of its resources or in combination with `clearIndexedDbPersistence()` to
 * ensure that all local state is destroyed between test runs.
 *
 * @returns A `Promise` that is resolved when the instance has been successfully
 * terminated.
 */ declare function Rh(t: any): any;
declare function rf(t: any, e: any, n: any, ...s: any[]): Promise<any>;
/**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned promise resolves immediately if there are no outstanding writes.
 * Otherwise, the promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` promises are rejected during user
 * changes.
 *
 * @returns A `Promise` which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */ declare function Th(t: any): Promise<any>;
/**
 * Creates a {@link QueryFieldFilterConstraint} that enforces that documents
 * must contain the specified field and that the value should satisfy the
 * relation constraint provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created {@link QueryFieldFilterConstraint}.
 */ declare function _l(t: any, e: any, n: any): wl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a write batch, used for performing multiple writes as a single
 * atomic operation. The maximum number of writes allowed in a single {@link WriteBatch}
 * is 500.
 *
 * Unlike transactions, write batches are persisted offline and therefore are
 * preferable when you don't need to condition your writes on read data.
 *
 * @returns A {@link WriteBatch} that can be used to atomically execute multiple
 * writes.
 */ declare function xf(t: any): Af;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ declare class ul {
    /** @hideconstructor protected */
    constructor(t: any, e: any, n: any, s: any, i: any);
    _firestore: any;
    _userDataWriter: any;
    _key: any;
    _document: any;
    _converter: any;
    /** Property of the `DocumentSnapshot` that provides the document's ID. */ get id(): any;
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */ get ref(): th;
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */ exists(): boolean;
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */ data(): any;
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    get(t: any): any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */ declare class Za {
    /** @hideconstructor */
    constructor(t: any, e: any, n: any, s: any);
    _authCredentials: any;
    _appCheckCredentials: any;
    _databaseId: any;
    _app: any;
    /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    type: string;
    _persistenceKey: string;
    _settings: Ya;
    _settingsFrozen: boolean;
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */ get app(): any;
    get _initialized(): boolean;
    get _terminated(): boolean;
    _setSettings(t: any): void;
    _getSettings(): Ya;
    _freezeSettings(): Ya;
    _delete(): Promise<void>;
    _terminateTask: Promise<void> | undefined;
    /** Returns a JSON-serializable representation of this `Firestore` instance. */ toJSON(): {
        app: any;
        databaseId: any;
        settings: Ya;
    };
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */ _terminate(): Promise<void>;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class ch {
    Nc: Promise<void>;
    kc: any[];
    Oc: boolean;
    $c: any[];
    Mc: any;
    Fc: boolean;
    Bc: boolean;
    Lc: any[];
    Co: Su;
    qc: () => void;
    get isShuttingDown(): boolean;
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */ enqueueAndForget(t: any): void;
    enqueueAndForgetEvenWhileRestricted(t: any): void;
    enterRestrictedMode(t: any): void;
    enqueue(t: any): Promise<any>;
    enqueueRetryable(t: any): void;
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */ Gc(): Promise<void>;
    Kc(t: any): Promise<any>;
    enqueueAfterDelay(t: any, e: any, n: any): lc;
    Uc(): void;
    verifyOperationInProgress(): void;
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */ zc(): Promise<void>;
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */ jc(t: any): boolean;
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */ Wc(t: any): Promise<void>;
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */ Hc(t: any): void;
    /** Called once a DelayedOperation is run or canceled. */ Qc(t: any): void;
}
import { FirebaseError as c } from "@firebase/util/dist/src/errors";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class q {
    promise: Promise<any>;
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
}
/**
 * An `AppliableConstraint` is an abstraction of a constraint that can be applied
 * to a Firestore query.
 */ declare class ll {
}
declare class dn extends fn {
    /**
     * Creates a filter based on the provided arguments.
     */ static create(t: any, e: any, n: any): dn | Rn | Dn;
    static createKeyFieldInFilter(t: any, e: any, n: any): Rn | vn;
    constructor(t: any, e: any, n: any);
    field: any;
    op: any;
    value: any;
    matches(t: any): boolean | void;
    matchesComparison(t: any): boolean | void;
    isInequality(): boolean;
    getFlattenedFilters(): dn[];
    getFilters(): dn[];
    getFirstInequalityField(): any;
}
/** Filter that matches on key fields within an array. */ declare class Rn extends dn {
    constructor(t: any, e: any);
    keys: any;
    matches(t: any): any;
}
/** A Filter that implements the array-contains-any operator. */ declare class Dn extends dn {
    constructor(t: any, e: any);
    matches(t: any): any;
}
/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ declare class Lh {
    constructor(t: any, e: any, n: any);
    databaseId: any;
    ignoreUndefinedProperties: any;
    serializer: any;
    /** Creates a new top-level parse context. */ ua(t: any, e: any, n: any, s?: boolean): Bh;
}
declare class W {
    constructor(t: any);
    value: any;
    type: string;
    headers: Map<any, any>;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Path represents an ordered sequence of string segments.
 */
declare class it {
    static comparator(t: any, e: any): 0 | 1 | -1;
    constructor(t: any, e: any, n: any);
    segments: any;
    offset: any;
    len: any;
    get length(): any;
    isEqual(t: any): boolean;
    child(t: any): any;
    /** The index of one past the last segment of the path. */ limit(): any;
    popFirst(t: any): any;
    popLast(): any;
    firstSegment(): any;
    lastSegment(): any;
    get(t: any): any;
    isEmpty(): boolean;
    isPrefixOf(t: any): boolean;
    isImmediateParentOf(t: any): boolean;
    forEach(t: any): void;
    toArray(): any;
}
declare class jh extends Nh {
    constructor(t: any, e: any);
    ca: any;
    _toFieldTransform(t: any): xs;
    isEqual(t: any): boolean;
}
declare class zh extends Nh {
    constructor(t: any, e: any);
    ca: any;
    _toFieldTransform(t: any): xs;
    isEqual(t: any): boolean;
}
declare class Kh extends Nh {
    _toFieldTransform(t: any): null;
    isEqual(t: any): boolean;
}
declare class Wh extends Nh {
    constructor(t: any, e: any);
    aa: any;
    _toFieldTransform(t: any): xs;
    isEqual(t: any): boolean;
}
declare class wf {
    kind: string;
    _onlineComponentProvider: _a;
    _offlineComponentProvider: fa;
    toJSON(): {
        kind: string;
    };
}
declare class _f {
    constructor(t: any);
    kind: string;
    _onlineComponentProvider: any;
    _offlineComponentProvider: any;
    toJSON(): {
        kind: string;
    };
}
declare class pf {
    kind: string;
    toJSON(): {
        kind: string;
    };
    /**
     * @internal
     */ _initialize(t: any): void;
    _onlineComponentProvider: _a | undefined;
    _offlineComponentProvider: wa | undefined;
}
declare class yf {
    constructor(t: any);
    forceOwnership: any;
    kind: string;
    toJSON(): {
        kind: string;
    };
    /**
     * @internal
     */ _initialize(t: any): void;
    _onlineComponentProvider: _a | undefined;
    _offlineComponentProvider: da | undefined;
}
declare class Qh extends Nh {
    _toFieldTransform(t: any): xs;
    isEqual(t: any): boolean;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
declare class Ya {
    constructor(t: any);
    host: any;
    ssl: any;
    credentials: any;
    ignoreUndefinedProperties: boolean;
    cache: any;
    cacheSizeBytes: any;
    experimentalForceLongPolling: boolean;
    experimentalAutoDetectLongPolling: boolean;
    useFetchStreams: boolean;
    isEqual(t: any): boolean;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
declare class Su {
    constructor(t: any, e: any, n?: number, s?: number, i?: number);
    Ws: any;
    timerId: any;
    _o: number;
    mo: number;
    yo: number;
    po: number;
    Io: any;
    /** The last backoff attempt, as epoch milliseconds. */
    To: number;
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */ reset(): void;
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */ Eo(): void;
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */ Ao(t: any): void;
    vo(): void;
    cancel(): void;
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ Ro(): number;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */
declare class lc {
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */ static createAndSchedule(t: any, e: any, n: any, s: any, i: any): lc;
    constructor(t: any, e: any, n: any, s: any, i: any);
    asyncQueue: any;
    timerId: any;
    targetTimeMs: any;
    op: any;
    removalCallback: any;
    deferred: q;
    then: <TResult1 = any, TResult2 = never>(onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */ start(t: any): void;
    timerHandle: NodeJS.Timeout | null | undefined;
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */ skipDelay(): void;
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */ cancel(t: any): void;
    handleDelayElapsed(): void;
    clearTimeout(): void;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class fn {
}
/** Filter that matches on key fields not present within an array. */ declare class vn extends dn {
    constructor(t: any, e: any);
    keys: any;
    matches(t: any): boolean;
}
/** A "context" object passed around while parsing user data. */ declare class Bh {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(t: any, e: any, n: any, s: any, i: any, r: any);
    settings: any;
    databaseId: any;
    serializer: any;
    ignoreUndefinedProperties: any;
    fieldTransforms: any;
    fieldMask: any;
    get path(): any;
    get Yc(): any;
    /** Returns a new context with the specified settings overwritten. */ Zc(t: any): Bh;
    Xc(t: any): Bh;
    na(t: any): Bh;
    sa(t: any): Bh;
    ia(t: any): L;
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ contains(t: any): boolean;
    Jc(): void;
    ea(t: any): void;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ declare class xs {
    constructor(t: any, e: any);
    field: any;
    transform: any;
}
/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */ declare class _a {
    initialize(t: any, e: any): Promise<void>;
    localStore: any;
    sharedClientState: any;
    datastore: Nu | undefined;
    remoteStore: $u | undefined;
    eventManager: gc | undefined;
    syncEngine: Nc | undefined;
    createEventManager(t: any): gc;
    createDatastore(t: any): Nu;
    createRemoteStore(t: any): $u;
    createSyncEngine(t: any, e: any): Nc;
    terminate(): Promise<void>;
}
declare class fa {
    synchronizeTabs: boolean;
    initialize(t: any): Promise<void>;
    serializer: Ti | undefined;
    sharedClientState: gu | undefined;
    persistence: ko | undefined;
    localStore: zo | undefined;
    gcScheduler: any;
    indexBackfillerScheduler: any;
    createGarbageCollectionScheduler(t: any, e: any): null;
    createIndexBackfillerScheduler(t: any, e: any): null;
    createLocalStore(t: any): zo;
    createPersistence(t: any): ko;
    createSharedClientState(t: any): gu;
    terminate(): Promise<void>;
}
/**
 * Provides all components needed for Firestore with multi-tab IndexedDB
 * persistence.
 *
 * In the legacy client, this provider is used to provide both multi-tab and
 * non-multi-tab persistence since we cannot tell at build time whether
 * `synchronizeTabs` will be enabled.
 */ declare class wa extends da {
    constructor(t: any, e: any);
    createSharedClientState(t: any): mu;
}
/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */ declare class da extends fa {
    constructor(t: any, e: any, n: any);
    mc: any;
    cacheSizeBytes: any;
    forceOwnership: any;
    createGarbageCollectionScheduler(t: any, e: any): ho;
    createIndexBackfillerScheduler(t: any, e: any): Nt;
    createPersistence(t: any): Lo;
}
declare const Nu_base: {
    new (): {};
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
/**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */
declare class Nu extends Nu_base {
    constructor(t: any, e: any, n: any, s: any);
    authCredentials: any;
    appCheckCredentials: any;
    connection: any;
    serializer: any;
    eu: boolean;
    nu(): void;
    /** Invokes the provided RPC with auth and AppCheck tokens. */ co(t: any, e: any, n: any): Promise<any>;
    /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */ fo(t: any, e: any, n: any, s: any): Promise<any>;
    terminate(): void;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class $u {
    constructor(t: any, e: any, n: any, s: any, i: any);
    localStore: any;
    datastore: any;
    asyncQueue: any;
    remoteSyncer: {};
    /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    lu: any[];
    /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    fu: Map<any, any>;
    /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    du: Set<any>;
    /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    wu: any[];
    _u: any;
    mu: Ou;
}
declare class gc {
    queries: ss;
    onlineState: string;
    Au: Set<any>;
}
/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ declare class Nc {
    constructor(t: any, e: any, n: any, s: any, i: any, r: any);
    localStore: any;
    remoteStore: any;
    eventManager: any;
    sharedClientState: any;
    currentUser: any;
    maxConcurrentLimboResolutions: any;
    nc: {};
    sc: ss;
    ic: Map<any, any>;
    /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    rc: Set<any>;
    /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    oc: ge;
    /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    uc: Map<any, any>;
    cc: Vo;
    /** Stores user completion handlers, indexed by User and BatchId. */
    ac: {};
    /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    hc: Map<any, any>;
    lc: so;
    onlineState: string;
    get isPrimaryClient(): boolean;
}
/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
declare class Ti {
    constructor(t: any, e: any);
    databaseId: any;
    useProto3Json: any;
}
declare class gu {
    Br: _u;
    Lr: {};
    onlineStateHandler: any;
    sequenceNumberHandler: any;
    addPendingMutation(t: any): void;
    updateMutationState(t: any, e: any, n: any): void;
    addLocalQueryTarget(t: any): any;
    updateQueryState(t: any, e: any, n: any): void;
    removeLocalQueryTarget(t: any): void;
    isLocalQueryTarget(t: any): boolean;
    clearQueryState(t: any): void;
    getAllActiveQueryTargets(): Ie;
    isActiveQueryTarget(t: any): boolean;
    start(): Promise<void>;
    handleUserChange(t: any, e: any, n: any): void;
    setOnlineState(t: any): void;
    shutdown(): void;
    writeSequenceNumber(t: any): void;
    notifyBundleLoaded(t: any): void;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
declare class ko {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    constructor(t: any, e: any);
    Ps: {};
    overlays: {};
    Vs: Ot;
    Ss: boolean;
    referenceDelegate: any;
    Ds: No;
    indexManager: Br;
    remoteDocumentCache: Co;
    serializer: er;
    xs: bo;
    start(): Promise<void>;
    shutdown(): Promise<void>;
    get started(): boolean;
    setDatabaseDeletedListener(): void;
    setNetworkEnabled(): void;
    getIndexManager(t: any): Br;
    getDocumentOverlayCache(t: any): any;
    getMutationQueue(t: any, e: any): any;
    getTargetCache(): No;
    getRemoteDocumentCache(): Co;
    getBundleCache(): bo;
    runTransaction(t: any, e: any, n: any): any;
    Os(t: any, e: any): At;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
declare class zo {
    constructor(t: any, e: any, n: any, s: any);
    persistence: any;
    Bi: any;
    serializer: any;
    /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    Li: ge;
    /** Maps a target to its targetID. */
    qi: ss;
    /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    Ui: Map<any, any>;
    Ki: any;
    Ds: any;
    xs: any;
    Gi(t: any): void;
    documentOverlayCache: any;
    indexManager: any;
    mutationQueue: any;
    localDocuments: vo | undefined;
    collectGarbage(t: any): any;
}
/**
 * `WebStorageSharedClientState` uses WebStorage (window.localStorage) as the
 * backing store for the SharedClientState. It keeps track of all active
 * clients and supports modifications of the local client's data.
 */ declare class mu {
    /** Returns 'true' if WebStorage is available in the current environment. */ static D(t: any): boolean;
    constructor(t: any, e: any, n: any, s: any, i: any);
    window: any;
    Ws: any;
    persistenceKey: any;
    nr: any;
    syncEngine: any;
    onlineStateHandler: any;
    sequenceNumberHandler: any;
    sr: (t: any) => undefined;
    rr: ge;
    started: boolean;
    /**
     * Captures WebStorage events that occur before `start()` is called. These
     * events are replayed once `WebStorageSharedClientState` is started.
     */
    ur: any[];
    storage: any;
    currentUser: any;
    cr: string;
    ar: string;
    hr: RegExp;
    lr: RegExp;
    dr: RegExp;
    wr: string;
    _r: string;
    start(): Promise<void>;
    writeSequenceNumber(t: any): void;
    getAllActiveQueryTargets(): Ie;
    isActiveQueryTarget(t: any): boolean;
    addPendingMutation(t: any): void;
    updateMutationState(t: any, e: any, n: any): void;
    addLocalQueryTarget(t: any): string;
    removeLocalQueryTarget(t: any): void;
    isLocalQueryTarget(t: any): any;
    clearQueryState(t: any): void;
    updateQueryState(t: any, e: any, n: any): void;
    handleUserChange(t: any, e: any, n: any): void;
    setOnlineState(t: any): void;
    notifyBundleLoaded(t: any): void;
    shutdown(): void;
    getItem(t: any): any;
    setItem(t: any, e: any): void;
    removeItem(t: any): void;
    ir(t: any): undefined;
    get Er(): any;
    mr(): void;
    Ir(t: any, e: any, n: any): void;
    Tr(t: any): void;
    Rr(t: any): void;
    Ar(t: any, e: any, n: any): void;
    vr(t: any): void;
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */ br(t: any): string | null;
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */ Vr(t: any, e: any): du | null;
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */ Sr(t: any, e: any): lu | null;
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */ Cr(t: any, e: any): fu | null;
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */ gr(t: any): wu | null;
    kr(t: any): any;
    Dr(t: any): Promise<any>;
    Nr(t: any): any;
    Pr(t: any, e: any): any;
    yr(t: any): void;
    pr(t: any): Ie;
}
/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */ declare class ho {
    constructor(t: any, e: any, n: any);
    garbageCollector: any;
    asyncQueue: any;
    localStore: any;
    On: any;
    start(): void;
    stop(): void;
    get started(): boolean;
    $n(t: any): void;
}
/** This class is responsible for the scheduling of Index Backfiller. */
declare class Nt {
    constructor(t: any, e: any);
    asyncQueue: any;
    tt: any;
    task: any;
    start(): void;
    stop(): void;
    get started(): boolean;
    et(t: any): void;
}
/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the “primary client”. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */
declare class Lo {
    static D(): boolean;
    constructor(t: any, e: any, n: any, s: any, i: any, r: any, o: any, u: any, c: any, a: any, h?: number);
    allowTabSynchronization: any;
    persistenceKey: any;
    clientId: any;
    Ws: any;
    window: any;
    document: any;
    Hs: any;
    Js: any;
    Ys: number;
    Vs: Ot | null;
    Ss: boolean;
    isPrimary: boolean;
    networkEnabled: boolean;
    /** Our window.unload handler, if registered. */
    Zs: (() => void) | null;
    inForeground: boolean;
    /** Our 'visibilitychange' listener if registered. */
    Xs: (() => void) | null;
    /** The client metadata refresh task. */
    ti: any;
    /** The last time we garbage collected the client metadata object store. */
    ei: number;
    /** A listener to notify on primary state changes. */
    ni: (t: any) => Promise<void>;
    referenceDelegate: fo;
    si: string;
    serializer: er;
    ii: vt;
    Ds: io;
    remoteDocumentCache: mo;
    xs: wr;
    ri: any;
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @returns Whether persistence was enabled.
     */ start(): Promise<void>;
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */ hi(t: any): any;
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */ setDatabaseDeletedListener(t: any): void;
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */ setNetworkEnabled(t: any): void;
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */ oi(): Promise<void>;
    li(t: any): any;
    mi(t: any): any;
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */ gi(): Promise<void>;
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */ ai(): void;
    /** Checks whether `client` is the local client. */ _i(t: any): boolean;
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */ fi(t: any): any;
    shutdown(): Promise<void>;
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */ pi(t: any, e: any): any;
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */ bi(): Promise<any>;
    get started(): boolean;
    getMutationQueue(t: any, e: any): Zr;
    getTargetCache(): io;
    getRemoteDocumentCache(): mo;
    getIndexManager(t: any): Ur;
    getDocumentOverlayCache(t: any): gr;
    getBundleCache(): wr;
    runTransaction(t: any, e: any, n: any): Promise<any>;
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    Pi(t: any): any;
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */ wi(t: any): any;
    /** Checks the primary lease and removes it if we are the current primary. */ di(t: any): any;
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ yi(t: any, e: any): boolean;
    ui(): void;
    Ai(): void;
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */ ci(): void;
    Ri(): void;
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */ Ti(t: any): boolean;
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */ Ei(): void;
    /** Removes the zombied client entry if it exists. */ vi(): void;
    Ii(t: any): string;
}
/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */
declare class Ou {
    constructor(t: any, e: any);
    asyncQueue: any;
    onlineStateHandler: any;
    /** The current OnlineState. */
    state: string;
    /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    su: number;
    /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    iu: any;
    /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    ru: boolean;
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */ ou(): void;
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */ au(t: any): void;
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */ set(t: any): void;
    uu(t: any): void;
    cu(t: any): void;
    hu(): void;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ declare class ss {
    constructor(t: any, e: any);
    mapKeyFn: any;
    equalsFn: any;
    /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    inner: {};
    /** The number of entries stored in the map */
    innerSize: number;
    /** Get a value for this key, or undefined if it does not exist. */ get(t: any): any;
    has(t: any): boolean;
    /** Put this key and value in the map. */ set(t: any, e: any): undefined;
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */ delete(t: any): boolean;
    forEach(t: any): void;
    isEmpty(): boolean;
    size(): number;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
declare class ge {
    constructor(t: any, e: any);
    comparator: any;
    root: any;
    insert(t: any, e: any): ge;
    remove(t: any): ge;
    get(t: any): any;
    indexOf(t: any): any;
    isEmpty(): any;
    get size(): any;
    minKey(): any;
    maxKey(): any;
    inorderTraversal(t: any): any;
    forEach(t: any): void;
    toString(): string;
    reverseTraversal(t: any): any;
    getIterator(): ye;
    getIteratorFrom(t: any): ye;
    getReverseIterator(): ye;
    getReverseIteratorFrom(t: any): ye;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ declare class Vo {
    es: Ie;
    ss: Ie;
    /** Returns true if the reference set contains no references. */ isEmpty(): any;
    /** Adds a reference to the given document key for the given ID. */ addReference(t: any, e: any): void;
    /** Add references to the given document keys for the given ID. */ os(t: any, e: any): void;
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */ removeReference(t: any, e: any): void;
    cs(t: any, e: any): void;
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */ hs(t: any): any[];
    ls(): void;
    us(t: any): void;
    fs(t: any): Ie;
    containsKey(t: any): any;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */
declare class so {
    static vn(): so;
    static bn(): so;
    constructor(t: any);
    Rn: any;
    next(): any;
}
/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */
declare class _u {
    activeTargetIds: Ie;
    tr(t: any): void;
    er(t: any): void;
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */ Xi(): string;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
declare class Ie {
    constructor(t: any);
    comparator: any;
    data: ge;
    has(t: any): boolean;
    first(): any;
    last(): any;
    get size(): any;
    indexOf(t: any): any;
    /** Iterates elements in order defined by "comparator" */ forEach(t: any): void;
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */ forEachInRange(t: any, e: any): void;
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */ forEachWhile(t: any, e: any): void;
    /** Finds the least element greater than or equal to `elem`. */ firstAfterOrEqual(t: any): any;
    getIterator(): Te;
    getIteratorFrom(t: any): Te;
    /** Inserts or updates an element */ add(t: any): Ie;
    /** Deletes an element */ delete(t: any): Ie;
    isEmpty(): any;
    unionWith(t: any): Ie;
    isEqual(t: any): boolean;
    toArray(): any[];
    toString(): string;
    copy(t: any): Ie;
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ declare class Ot {
    constructor(t: any, e: any);
    previousValue: any;
    ut: ((t: any) => any) | undefined;
    ot(t: any): any;
    next(): number;
}
declare namespace Ot {
    const ct: number;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class No {
    constructor(t: any);
    persistence: any;
    /**
     * Maps a target to the data about that target
     */
    As: ss;
    /** The last received snapshot version. */
    lastRemoteSnapshotVersion: st;
    /** The highest numbered target ID encountered. */
    highestTargetId: number;
    /** The highest sequence number encountered. */
    Rs: number;
    /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    vs: Vo;
    targetCount: number;
    bs: so;
    forEachTarget(t: any, e: any): At;
    getLastRemoteSnapshotVersion(t: any): At;
    getHighestSequenceNumber(t: any): At;
    allocateTargetId(t: any): At;
    setTargetsMetadata(t: any, e: any, n: any): At;
    Sn(t: any): void;
    addTargetData(t: any, e: any): At;
    updateTargetData(t: any, e: any): At;
    removeTargetData(t: any, e: any): At;
    removeTargets(t: any, e: any, n: any): At;
    getTargetCount(t: any): At;
    getTargetData(t: any, e: any): At;
    addMatchingKeys(t: any, e: any, n: any): At;
    removeMatchingKeys(t: any, e: any, n: any): At;
    removeMatchingKeysForTargetId(t: any, e: any): At;
    getMatchingKeysForTargetId(t: any, e: any): At;
    containsKey(t: any, e: any): At;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ declare class Br {
    He: Lr;
    addToCollectionParentIndex(t: any, e: any): At;
    getCollectionParents(t: any, e: any): At;
    addFieldIndex(t: any, e: any): At;
    deleteFieldIndex(t: any, e: any): At;
    getDocumentsMatchingTarget(t: any, e: any): At;
    getIndexType(t: any, e: any): At;
    getFieldIndexes(t: any, e: any): At;
    getNextCollectionGroupToUpdate(t: any): At;
    getMinOffset(t: any, e: any): At;
    getMinOffsetFromCollectionGroup(t: any, e: any): At;
    updateCollectionGroup(t: any, e: any, n: any): At;
    updateIndexEntries(t: any, e: any): At;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */
declare class Co {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    constructor(t: any);
    Ts: any;
    /** Underlying cache of documents and their read times. */
    docs: ge;
    /** Size of all cached documents. */
    size: number;
    setIndexManager(t: any): void;
    indexManager: any;
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */ addEntry(t: any, e: any): any;
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */ removeEntry(t: any): void;
    getEntry(t: any, e: any): At;
    getEntries(t: any, e: any): At;
    getDocumentsMatchingQuery(t: any, e: any, n: any, s: any): At;
    getAllFromCollectionGroup(t: any, e: any, n: any, s: any): void;
    Es(t: any, e: any): At;
    newChangeBuffer(t: any): xo;
    getSize(t: any): At;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */ declare class er {
    constructor(t: any);
    se: any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class bo {
    constructor(t: any);
    serializer: any;
    Zn: Map<any, any>;
    Xn: Map<any, any>;
    getBundleMetadata(t: any, e: any): At;
    saveBundleMetadata(t: any, e: any): At;
    getNamedQuery(t: any, e: any): At;
    saveNamedQuery(t: any, e: any): At;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ declare class At {
    static resolve(t: any): At;
    static reject(t: any): At;
    static waitFor(t: any): At;
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */ static or(t: any): At;
    static forEach(t: any, e: any): At;
    /**
     * Concurrently map all array elements through asynchronous function.
     */ static mapArray(t: any, e: any): At;
    /**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */ static doWhile(t: any, e: any): At;
    constructor(t: any);
    nextCallback: ((e: any) => void) | null;
    catchCallback: ((t: any) => void) | null;
    isDone: boolean;
    callbackAttached: boolean;
    result: any;
    error: any;
    catch(t: any): At;
    next(t: any, e: any): At;
    toPromise(): Promise<any>;
    wrapUserFunction(t: any): At;
    wrapSuccess(t: any, e: any): At;
    wrapFailure(t: any, e: any): At;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ declare class vo {
    constructor(t: any, e: any, n: any, s: any);
    remoteDocumentCache: any;
    mutationQueue: any;
    documentOverlayCache: any;
    indexManager: any;
    /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */ getDocument(t: any, e: any): any;
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */ getDocuments(t: any, e: any): any;
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */ getLocalViewOfDocuments(t: any, e: any, n?: Ie): any;
    /**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */ getOverlayedDocuments(t: any, e: any): any;
    /**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */ populateOverlays(t: any, e: any, n: any): any;
    /**
     * Computes the local view for the given documents.
     *
     * @param docs - The documents to compute views for. It also has the base
     *   version of the documents.
     * @param overlays - The overlays that need to be applied to the given base
     *   version of the documents.
     * @param existenceStateChanged - A set of documents whose existence states
     *   might have changed. This is used to determine if we need to re-calculate
     *   overlays from mutation queues.
     * @return A map represents the local documents view.
     */ computeViews(t: any, e: any, n: any, s: any): any;
    recalculateAndSaveOverlays(t: any, e: any): any;
    /**
     * Recalculates overlays by reading the documents from remote document cache
     * first, and saves them after they are calculated.
     */ recalculateAndSaveOverlaysForDocumentKeys(t: any, e: any): any;
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param offset - Read time and key to start scanning by (exclusive).
     */ getDocumentsMatchingQuery(t: any, e: any, n: any): any;
    /**
     * Given a collection group, returns the next documents that follow the provided offset, along
     * with an updated batch ID.
     *
     * <p>The documents returned by this method are ordered by remote version from the provided
     * offset. If there are no more remote documents after the provided offset, documents with
     * mutations in order of batch id from the offset are returned. Since all documents in a batch are
     * returned together, the total number of documents returned can exceed {@code count}.
     *
     * @param transaction
     * @param collectionGroup The collection group for the documents.
     * @param offset The offset to index into.
     * @param count The number of documents to return
     * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
     */ getNextDocuments(t: any, e: any, n: any, s: any): any;
    getDocumentsMatchingDocumentQuery(t: any, e: any): any;
    getDocumentsMatchingCollectionGroupQuery(t: any, e: any, n: any): any;
    getDocumentsMatchingCollectionQuery(t: any, e: any, n: any): any;
}
/**
 * This class represents the immutable ClientState for a client read from
 * WebStorage, containing the list of active query targets.
 */ declare class du {
    /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */ static Zi(t: any, e: any): du | null;
    constructor(t: any, e: any);
    clientId: any;
    activeTargetIds: any;
}
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
declare class lu {
    /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */ static Zi(t: any, e: any, n: any): lu | null;
    constructor(t: any, e: any, n: any, s: any);
    user: any;
    batchId: any;
    state: any;
    error: any;
    Xi(): string;
}
/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
declare class fu {
    /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */ static Zi(t: any, e: any): fu | null;
    constructor(t: any, e: any, n: any);
    targetId: any;
    state: any;
    error: any;
    Xi(): string;
}
/**
 * This class represents the online state for all clients participating in
 * multi-tab. The online state is only written to by the primary client, and
 * used in secondary clients to update their query views.
 */ declare class wu {
    /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */ static Zi(t: any): wu | null;
    constructor(t: any, e: any);
    clientId: any;
    onlineState: any;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Provides LRU functionality for IndexedDB persistence. */
declare class fo {
    constructor(t: any, e: any);
    db: any;
    garbageCollector: lo;
    Fn(t: any): any;
    qn(t: any): any;
    forEachTarget(t: any, e: any): any;
    Bn(t: any, e: any): any;
    addReference(t: any, e: any, n: any): any;
    removeReference(t: any, e: any, n: any): any;
    removeTargets(t: any, e: any, n: any): any;
    markPotentiallyOrphaned(t: any, e: any): any;
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */ Kn(t: any, e: any): any;
    removeOrphanedDocuments(t: any, e: any): any;
    removeTarget(t: any, e: any): any;
    updateLimboDocument(t: any, e: any): any;
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */ Un(t: any, e: any): any;
    getCacheSize(t: any): any;
}
/**
 * Provides a wrapper around IndexedDb with a simplified interface that uses
 * Promise-like return values to chain operations. Real promises cannot be used
 * since .then() continuations are executed asynchronously (e.g. via
 * .setImmediate), which would cause IndexedDB to end the transaction.
 * See PersistencePromise for more details.
 */ declare class vt {
    /** Deletes the specified database. */ static delete(t: any): Promise<any>;
    /** Returns true if IndexedDB is available in the current environment. */ static D(): boolean;
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */ static C(): boolean;
    /** Helper to get a typed SimpleDbStore from a transaction. */ static O(t: any, e: any): any;
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    static S(t: any): number;
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    static N(t: any): number;
    constructor(t: any, e: any, n: any);
    name: any;
    version: any;
    V: any;
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */ $(t: any): any;
    db: any;
    B(t: any): void;
    F: any;
    runTransaction(t: any, e: any, n: any, s: any): Promise<any>;
    close(): void;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class io {
    constructor(t: any, e: any);
    referenceDelegate: any;
    serializer: any;
    allocateTargetId(t: any): any;
    getLastRemoteSnapshotVersion(t: any): any;
    getHighestSequenceNumber(t: any): any;
    setTargetsMetadata(t: any, e: any, n: any): any;
    addTargetData(t: any, e: any): any;
    updateTargetData(t: any, e: any): any;
    removeTargetData(t: any, e: any): any;
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */ removeTargets(t: any, e: any, n: any): any;
    /**
     * Call provided function with each `TargetData` that we have cached.
     */ forEachTarget(t: any, e: any): any;
    Pn(t: any): any;
    Vn(t: any, e: any): any;
    Sn(t: any, e: any): any;
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */ Dn(t: any, e: any): boolean;
    getTargetCount(t: any): any;
    getTargetData(t: any, e: any): any;
    addMatchingKeys(t: any, e: any, n: any): At;
    removeMatchingKeys(t: any, e: any, n: any): At;
    removeMatchingKeysForTargetId(t: any, e: any): any;
    getMatchingKeysForTargetId(t: any, e: any): any;
    containsKey(t: any, e: any): any;
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId - The target ID of the TargetData entry to look up.
     * @returns The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    ne(t: any, e: any): any;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ declare class mo {
    constructor(t: any);
    serializer: any;
    setIndexManager(t: any): void;
    indexManager: any;
    /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */ addEntry(t: any, e: any, n: any): any;
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */ removeEntry(t: any, e: any, n: any): any;
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */ updateMetadata(t: any, e: any): any;
    getEntry(t: any, e: any): any;
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document entry and its size.
     */ zn(t: any, e: any): any;
    getEntries(t: any, e: any): any;
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys - The set of keys entries to look up.
     * @returns A map of documents indexed by key and a map of sizes indexed by
     *     key (zero if the document does not exist).
     */ Wn(t: any, e: any): any;
    jn(t: any, e: any, n: any): any;
    getDocumentsMatchingQuery(t: any, e: any, n: any, s: any): any;
    getAllFromCollectionGroup(t: any, e: any, n: any, s: any): any;
    newChangeBuffer(t: any): yo;
    getSize(t: any): any;
    getMetadata(t: any): any;
    Gn(t: any, e: any): any;
    /**
     * Decodes `dbRemoteDoc` and returns the document (or an invalid document if
     * the document corresponds to the format used for sentinel deletes).
     */ Qn(t: any, e: any): void | on;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ declare class wr {
    getBundleMetadata(t: any, e: any): any;
    saveBundleMetadata(t: any, e: any): any;
    getNamedQuery(t: any, e: any): any;
    saveNamedQuery(t: any, e: any): any;
}
declare class Zr {
    /**
     * Creates a new mutation queue for the given user.
     * @param user - The user for which to create a mutation queue.
     * @param serializer - The serializer to use when persisting to IndexedDb.
     */ static ie(t: any, e: any, n: any, s: any): Zr;
    constructor(t: any, e: any, n: any, s: any);
    userId: any;
    serializer: any;
    indexManager: any;
    referenceDelegate: any;
    /**
     * Caches the document keys for pending mutation batches. If the mutation
     * has been removed from IndexedDb, the cached value may continue to
     * be used to retrieve the batch's document keys. To remove a cached value
     * locally, `removeCachedMutationKeys()` should be invoked either directly
     * or through `removeMutationBatches()`.
     *
     * With multi-tab, when the primary client acknowledges or rejects a mutation,
     * this cache is used by secondary clients to invalidate the local
     * view of the documents that were previously affected by the mutation.
     */
    pn: {};
    checkEmpty(t: any): any;
    addMutationBatch(t: any, e: any, n: any, s: any): any;
    lookupMutationBatch(t: any, e: any): any;
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    In(t: any, e: any): any;
    getNextMutationBatchAfterBatchId(t: any, e: any): any;
    getHighestUnacknowledgedBatchId(t: any): any;
    getAllMutationBatches(t: any): any;
    getAllMutationBatchesAffectingDocumentKey(t: any, e: any): any;
    getAllMutationBatchesAffectingDocumentKeys(t: any, e: any): At;
    getAllMutationBatchesAffectingQuery(t: any, e: any): any;
    Tn(t: any, e: any): At;
    removeMutationBatch(t: any, e: any): At;
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    En(t: any): void;
    performConsistencyCheck(t: any): any;
    containsKey(t: any, e: any): any;
    /** Returns the mutation queue's metadata from IndexedDb. */
    An(t: any): any;
}
/**
 * A persisted implementation of IndexManager.
 *
 * PORTING NOTE: Unlike iOS and Android, the Web SDK does not memoize index
 * data as it supports multi-tab access.
 */
declare class Ur {
    constructor(t: any, e: any);
    user: any;
    databaseId: any;
    /**
     * An in-memory copy of the index entries we've already written since the SDK
     * launched. Used to avoid re-writing the same entry repeatedly.
     *
     * This is *NOT* a complete cache of what's in persistence and so can never be
     * used to satisfy reads.
     */
    Je: Lr;
    /**
     * Maps from a target to its equivalent list of sub-targets. Each sub-target
     * contains only one term from the target's disjunctive normal form (DNF).
     */
    Ye: ss;
    uid: any;
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */ addToCollectionParentIndex(t: any, e: any): any;
    getCollectionParents(t: any, e: any): any;
    addFieldIndex(t: any, e: any): any;
    deleteFieldIndex(t: any, e: any): any;
    getDocumentsMatchingTarget(t: any, e: any): At;
    Ze(t: any): any;
    /**
     * Constructs a key range query on `DbIndexEntryStore` that unions all
     * bounds.
     */ nn(t: any, e: any, n: any, s: any, i: any, r: any, o: any): IDBKeyRange[];
    /** Generates the lower bound for `arrayValue` and `directionalValue`. */ rn(t: any, e: any, n: any, s: any): br;
    /** Generates the upper bound for `arrayValue` and `directionalValue`. */ on(t: any, e: any, n: any, s: any): br;
    Xe(t: any, e: any): any;
    getIndexType(t: any, e: any): At;
    /**
     * Returns the byte encoded form of the directional values in the field index.
     * Returns `null` if the document does not have all fields specified in the
     * index.
     */ un(t: any, e: any): Uint8Array | null;
    /** Encodes a single value to the ascending index format. */ sn(t: any): Uint8Array;
    /**
     * Returns an encoded form of the document key that sorts based on the key
     * ordering of the field index.
     */ cn(t: any, e: any): Uint8Array;
    /**
     * Encodes the given field values according to the specification in `target`.
     * For IN queries, a list of possible values is returned.
     */ en(t: any, e: any, n: any): any[];
    /**
     * Encodes the given bounds according to the specification in `target`. For IN
     * queries, a list of possible values is returned.
     */ tn(t: any, e: any, n: any): any[];
    /** Returns the byte representation for the provided encoders. */ ln(t: any): any[];
    /**
     * Creates a separate encoder for each element of an array.
     *
     * The method appends each value to all existing encoders (e.g. filter("a",
     * "==", "a1").filter("b", "in", ["b1", "b2"]) becomes ["a1,b1", "a1,b2"]). A
     * list of new encoders is returned.
     */ hn(t: any, e: any, n: any): vr[];
    an(t: any, e: any): boolean;
    getFieldIndexes(t: any, e: any): any;
    getNextCollectionGroupToUpdate(t: any): any;
    updateCollectionGroup(t: any, e: any, n: any): any;
    updateIndexEntries(t: any, e: any): At;
    mn(t: any, e: any, n: any, s: any): any;
    gn(t: any, e: any, n: any, s: any): any;
    dn(t: any, e: any, n: any): any;
    /** Creates the index entries for the given document. */ wn(t: any, e: any): Ie;
    /**
     * Updates the index entries for the provided document by deleting entries
     * that are no longer referenced in `newEntries` and adding all newly added
     * entries.
     */ _n(t: any, e: any, n: any, s: any, i: any): At;
    fn(t: any): any;
    /**
     * Returns a new set of IDB ranges that splits the existing range and excludes
     * any values that match the `notInValue` from these ranges. As an example,
     * '[foo > 2 && foo != 3]` becomes  `[foo > 2 && < 3, foo > 3]`.
     */ createRange(t: any, e: any, n: any): IDBKeyRange[];
    yn(t: any, e: any): boolean;
    getMinOffsetFromCollectionGroup(t: any, e: any): any;
    getMinOffset(t: any, e: any): At;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ declare class gr {
    static ie(t: any, e: any): gr;
    /**
     * @param serializer - The document serializer.
     * @param userId - The userId for which we are accessing overlays.
     */
    constructor(t: any, e: any);
    serializer: any;
    userId: any;
    getOverlay(t: any, e: any): any;
    getOverlays(t: any, e: any): At;
    saveOverlays(t: any, e: any, n: any): At;
    removeOverlaysForBatchId(t: any, e: any, n: any): At;
    getOverlaysForCollection(t: any, e: any, n: any): any;
    getOverlaysForCollectionGroup(t: any, e: any, n: any, s: any): any;
    re(t: any, e: any): any;
}
declare class ye {
    constructor(t: any, e: any, n: any, s: any);
    isReverse: any;
    nodeStack: any[];
    getNext(): {
        key: any;
        value: any;
    };
    hasNext(): boolean;
    peek(): {
        key: any;
        value: any;
    } | null;
}
declare class Te {
    constructor(t: any);
    iter: any;
    getNext(): any;
    hasNext(): any;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ declare class st {
    static fromTimestamp(t: any): st;
    static min(): st;
    static max(): st;
    constructor(t: any);
    timestamp: any;
    compareTo(t: any): any;
    isEqual(t: any): any;
    /** Returns a number representation of the version for use in spec tests. */ toMicroseconds(): number;
    toString(): string;
    toTimestamp(): any;
}
/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */ declare class Lr {
    index: {};
    add(t: any): boolean;
    has(t: any): any;
    getEntries(t: any): any;
}
/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
declare class xo extends _o {
    constructor(t: any);
    Jn: any;
    applyChanges(t: any): At;
    getFromCache(t: any, e: any): any;
    getAllFromCache(t: any, e: any): any;
}
/** Implements the steps for LRU garbage collection. */ declare class lo {
    constructor(t: any, e: any);
    Mn: any;
    params: any;
    calculateTargetCount(t: any, e: any): any;
    nthSequenceNumber(t: any, e: any): any;
    removeTargets(t: any, e: any, n: any): any;
    removeOrphanedDocuments(t: any, e: any): any;
    collect(t: any, e: any): any;
    getCacheSize(t: any): any;
    Ln(t: any, e: any): any;
}
/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ declare class yo extends _o {
    /**
     * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    constructor(t: any, e: any);
    Jn: any;
    trackRemovals: any;
    Yn: ss;
    applyChanges(t: any): At;
    getFromCache(t: any, e: any): any;
    getAllFromCache(t: any, e: any): any;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ declare class on {
    /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */ static newInvalidDocument(t: any): on;
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */ static newFoundDocument(t: any, e: any, n: any, s: any): on;
    /** Creates a new document that is known to not exist at the given version. */ static newNoDocument(t: any, e: any): on;
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */ static newUnknownDocument(t: any, e: any): on;
    constructor(t: any, e: any, n: any, s: any, i: any, r: any, o: any);
    key: any;
    documentType: any;
    version: any;
    readTime: any;
    createTime: any;
    data: any;
    documentState: any;
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */ convertToFoundDocument(t: any, e: any): on;
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */ convertToNoDocument(t: any): on;
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */ convertToUnknownDocument(t: any): on;
    setHasCommittedMutations(): on;
    setHasLocalMutations(): on;
    setReadTime(t: any): on;
    get hasLocalMutations(): boolean;
    get hasCommittedMutations(): boolean;
    get hasPendingWrites(): boolean;
    isValidDocument(): boolean;
    isFoundDocument(): boolean;
    isNoDocument(): boolean;
    isUnknownDocument(): boolean;
    isEqual(t: any): any;
    mutableCopy(): on;
    toString(): string;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Represents an index entry saved by the SDK in persisted storage. */ declare class br {
    constructor(t: any, e: any, n: any, s: any);
    indexId: any;
    documentKey: any;
    arrayValue: any;
    directionalValue: any;
    /**
     * Returns an IndexEntry entry that sorts immediately after the current
     * directional value.
     */ qe(): br;
}
/**
 * Implements `DirectionalIndexByteEncoder` using `OrderedCodeWriter` for the
 * actual encoding.
 */ declare class vr {
    Me: Er;
    Fe: Ar;
    Be: Rr;
    seed(t: any): void;
    Le(t: any): Ar | Rr;
    $e(): Uint8Array;
    reset(): void;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ declare class _o {
    changes: ss;
    changesApplied: boolean;
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */ addEntry(t: any): void;
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */ removeEntry(t: any, e: any): void;
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */ getEntry(t: any, e: any): any;
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */ getEntries(t: any, e: any): any;
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */ apply(t: any): any;
    /** Helper to assert this.changes is not null  */ assertNotApplied(): void;
}
/**
 * OrderedCodeWriter is a minimal-allocation implementation of the writing
 * behavior defined by the backend.
 *
 * The code is ported from its Java counterpart.
 */ declare class Er {
    buffer: Uint8Array;
    position: number;
    Ie(t: any): void;
    Ae(t: any): void;
    /** Writes utf8 bytes into this byte sequence, ascending. */ be(t: any): void;
    /** Writes utf8 bytes into this byte sequence, descending */ Pe(t: any): void;
    Ve(t: any): void;
    Ce(t: any): void;
    /**
     * Writes the "infinity" byte sequence that sorts after all other byte
     * sequences written in ascending order.
     */ xe(): void;
    /**
     * Writes the "infinity" byte sequence that sorts before all other byte
     * sequences written in descending order.
     */ ke(): void;
    /**
     * Resets the buffer such that it is the same as when it was newly
     * constructed.
     */ reset(): void;
    seed(t: any): void;
    /** Makes a copy of the encoded bytes in this buffer.  */ $e(): Uint8Array;
    /**
     * Encodes `val` into an encoding so that the order matches the IEEE 754
     * floating-point comparison results with the following exceptions:
     *   -0.0 < 0.0
     *   all non-NaN < NaN
     *   NaN = NaN
     */ Se(t: any): Uint8Array;
    /** Writes a single byte ascending to the buffer. */ Te(t: any): void;
    /** Writes a single byte descending to the buffer.  */ Re(t: any): void;
    Ee(): void;
    ve(): void;
    Ne(t: any): void;
    Oe(t: any): void;
    De(t: any): void;
}
declare class Ar {
    constructor(t: any);
    Me: any;
    we(t: any): void;
    le(t: any): void;
    he(t: any): void;
    ce(): void;
}
declare class Rr {
    constructor(t: any);
    Me: any;
    we(t: any): void;
    le(t: any): void;
    he(t: any): void;
    ce(): void;
}
export { $l as AbstractUserDataWriter, Vh as AggregateField, Sh as AggregateQuerySnapshot, Dh as Bytes, lh as CACHE_SIZE_UNLIMITED, nh as CollectionReference, th as DocumentReference, Ql as DocumentSnapshot, Ch as FieldPath, Nh as FieldValue, fh as Firestore, L as FirestoreError, kh as GeoPoint, hh as LoadBundleTask, eh as Query, ml as QueryCompositeFilterConstraint, fl as QueryConstraint, zl as QueryDocumentSnapshot, Pl as QueryEndAtConstraint, wl as QueryFieldFilterConstraint, Tl as QueryLimitConstraint, pl as QueryOrderByConstraint, jl as QuerySnapshot, Rl as QueryStartAtConstraint, Gl as SnapshotMetadata, nt as Timestamp, vf as Transaction, Af as WriteBatch, Oe as _DatabaseId, ct as _DocumentKey, J as _EmptyAppCheckTokenProvider, K as _EmptyAuthCredentialsProvider, ut as _FieldPath, ui as _TestingHooks, Ha as _cast, M as _debugAssert, ve as _isBase64Available, N as _logWarn, Qa as _validateIsNotUsedTogether, uf as addDoc, Ul as aggregateFieldEqual, Kl as aggregateQuerySnapshotEqual, yl as and, Df as arrayRemove, Sf as arrayUnion, Ll as average, Ih as clearIndexedDbPersistence, sh as collection, ih as collectionGroup, Xa as connectFirestoreEmulator, ql as count, of as deleteDoc, Pf as deleteField, Ah as disableNetwork, rh as doc, xh as documentId, gh as enableIndexedDbPersistence, yh as enableMultiTabIndexedDbPersistence, Eh as enableNetwork, Sl as endAt, Vl as endBefore, _h as ensureFirestoreConfigured, hf as executeWrite, df as getAggregateFromServer, ff as getCountFromServer, Jl as getDoc, Zl as getDocFromCache, Xl as getDocFromServer, tf as getDocs, ef as getDocsFromCache, nf as getDocsFromServer, wh as getFirestore, Cf as increment, dh as initializeFirestore, El as limit, Al as limitToLast, vh as loadBundle, mf as memoryLocalCache, bh as namedQuery, cf as onSnapshot, af as onSnapshotsInSync, gl as or, Il as orderBy, gf as persistentLocalCache, Tf as persistentMultipleTabManager, If as persistentSingleTabManager, dl as query, uh as queryEqual, oh as refEqual, bf as runTransaction, Vf as serverTimestamp, sf as setDoc, Nf as setIndexConfiguration, D as setLogLevel, Hl as snapshotEqual, bl as startAfter, vl as startAt, Bl as sum, Rh as terminate, rf as updateDoc, Th as waitForPendingWrites, _l as where, xf as writeBatch };
