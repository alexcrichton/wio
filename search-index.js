var searchIndex = {};
searchIndex['wio'] = {"items":[[0,"","wio","A zero overhead Windows I/O library",null,null],[0,"iocp","","Bindings to IOCP, I/O Completion Ports",null,null],[3,"CompletionPort","wio::iocp","A handle to an Windows I/O Completion Port.",null,null],[3,"CompletionStatus","","A status message received from an I/O completion port.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"completionstatus"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"completionstatus"}],"output":{"name":"completionstatus"}}],[11,"new","","Creates a new I/O completion port with the specified concurrency value.",1,{"inputs":[{"name":"completionport"},{"name":"u32"}],"output":{"name":"result"}}],[11,"add_handle","","Associates a new `HANDLE` to this I/O completion port.",1,{"inputs":[{"name":"completionport"},{"name":"usize"},{"name":"t"}],"output":{"name":"result"}}],[11,"add_socket","","Associates a new `SOCKET` to this I/O completion port.",1,{"inputs":[{"name":"completionport"},{"name":"usize"},{"name":"t"}],"output":{"name":"result"}}],[11,"get","","Dequeue a completion status from this I/O completion port.",1,{"inputs":[{"name":"completionport"},{"name":"option"}],"output":{"name":"result"}}],[11,"get_many","","Dequeues a number of completion statuses from this I/O completion port.",1,null],[11,"post","","Posts a new completion status onto this I/O completion port.",1,{"inputs":[{"name":"completionport"},{"name":"completionstatus"}],"output":{"name":"result"}}],[11,"as_raw_handle","","",1,{"inputs":[{"name":"completionport"}],"output":{"name":"handle"}}],[11,"from_raw_handle","","",1,{"inputs":[{"name":"completionport"},{"name":"handle"}],"output":{"name":"completionport"}}],[11,"into_raw_handle","","",1,{"inputs":[{"name":"completionport"}],"output":{"name":"handle"}}],[11,"new","","Creates a new completion status with the provided parameters.",0,null],[11,"zero","","Creates a new \"zero\" completion status.",0,{"inputs":[{"name":"completionstatus"}],"output":{"name":"completionstatus"}}],[11,"bytes_transferred","","Returns the number of bytes that were transferred for the I/O operation\nassociated with this completion status.",0,{"inputs":[{"name":"completionstatus"}],"output":{"name":"u32"}}],[11,"token","","Returns the completion key value associated with the file handle whose\nI/O operation has completed.",0,{"inputs":[{"name":"completionstatus"}],"output":{"name":"usize"}}],[11,"overlapped","","Returns a pointer to the `OVERLAPPED` structure that was specified when\nthe I/O operation was started.",0,null],[0,"net","wio","Extensions and types for the standard networking primitives.",null,null],[3,"SocketAddrBuf","wio::net","A type to represent a buffer in which a socket address will be stored.",null,null],[3,"AcceptAddrsBuf","","A type to represent a buffer in which an accepted socket's address will be\nstored.",null,null],[3,"AcceptAddrs","","The parsed return value of `AcceptAddrsBuf`.",null,null],[8,"TcpStreamExt","","Additional methods for the `TcpStream` type in the standard library.",null,null],[10,"read_overlapped","","Execute an overlapped read I/O operation on this TCP stream.",2,null],[10,"write_overlapped","","Execute an overlapped write I/O operation on this TCP stream.",2,null],[8,"UdpSocketExt","","Additional methods for the `UdpSocket` type in the standard library.",null,null],[10,"recv_from_overlapped","","Execute an overlapped receive I/O operation on this UDP socket.",3,null],[10,"send_to_overlapped","","Execute an overlapped send I/O operation on this UDP socket.",3,null],[8,"TcpBuilderExt","","Additional methods for the `TcpBuilder` type in the `net2` library.",null,null],[10,"connect_overlapped","","Attempt to consume the internal socket in this builder by executing an\noverlapped connect operation.",4,{"inputs":[{"name":"tcpbuilderext"},{"name":"socketaddr"},{"name":"wsaoverlapped"}],"output":{"name":"result"}}],[8,"TcpListenerExt","","Additional methods for the `TcpListener` type in the standard library.",null,null],[10,"accept_overlapped","","Perform an accept operation on this listener, accepting a connection in\nan overlapped fashion.",5,{"inputs":[{"name":"tcplistenerext"},{"name":"tcpbuilder"},{"name":"acceptaddrsbuf"},{"name":"wsaoverlapped"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"socketaddrbuf"}],"output":{"name":"socketaddrbuf"}}],[11,"read_overlapped","std::net::tcp","",7,null],[11,"write_overlapped","","",7,null],[11,"recv_from_overlapped","std::net::udp","",8,null],[11,"send_to_overlapped","","",8,null],[11,"connect_overlapped","net2::tcp","",9,{"inputs":[{"name":"tcpbuilder"},{"name":"socketaddr"},{"name":"wsaoverlapped"}],"output":{"name":"result"}}],[11,"accept_overlapped","std::net::tcp","",10,{"inputs":[{"name":"tcplistener"},{"name":"tcpbuilder"},{"name":"acceptaddrsbuf"},{"name":"wsaoverlapped"}],"output":{"name":"result"}}],[11,"new","wio::net","Creates a new blank socket address buffer.",6,{"inputs":[{"name":"socketaddrbuf"}],"output":{"name":"socketaddrbuf"}}],[11,"to_socket_addr","","Parses this buffer to return a standard socket address.",6,{"inputs":[{"name":"socketaddrbuf"}],"output":{"name":"option"}}],[11,"new","","Creates a new blank buffer ready to be passed to a call to\n`accept_overlapped`.",11,{"inputs":[{"name":"acceptaddrsbuf"}],"output":{"name":"acceptaddrsbuf"}}],[11,"parse","","Parses the data contained in this address buffer, returning the parsed\nresult if successful.",11,{"inputs":[{"name":"acceptaddrsbuf"},{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"local","","Returns the local socket address contained in this buffer.",12,{"inputs":[{"name":"acceptaddrs"}],"output":{"name":"option"}}],[11,"remote","","Returns the remote socket address contained in this buffer.",12,{"inputs":[{"name":"acceptaddrs"}],"output":{"name":"option"}}],[0,"pipe","wio","Named pipes",null,null],[3,"AnonRead","wio::pipe","Readable half of an anonymous pipe.",null,null],[3,"AnonWrite","","Writable half of an anonymous pipe.",null,null],[3,"NamedPipe","","A named pipe that can accept connections.",null,null],[3,"NamedPipeBuilder","","A builder structure for creating a new named pipe.",null,null],[5,"anonymous","","Creates a new anonymous in-memory pipe, returning the read/write ends of the\npipe.",null,{"inputs":[{"name":"u32"}],"output":{"name":"result"}}],[11,"read","","",13,null],[11,"as_raw_handle","","",13,{"inputs":[{"name":"anonread"}],"output":{"name":"handle"}}],[11,"from_raw_handle","","",13,{"inputs":[{"name":"anonread"},{"name":"handle"}],"output":{"name":"anonread"}}],[11,"into_raw_handle","","",13,{"inputs":[{"name":"anonread"}],"output":{"name":"handle"}}],[11,"write","","",14,null],[11,"flush","","",14,{"inputs":[{"name":"anonwrite"}],"output":{"name":"result"}}],[11,"as_raw_handle","","",14,{"inputs":[{"name":"anonwrite"}],"output":{"name":"handle"}}],[11,"from_raw_handle","","",14,{"inputs":[{"name":"anonwrite"},{"name":"handle"}],"output":{"name":"anonwrite"}}],[11,"into_raw_handle","","",14,{"inputs":[{"name":"anonwrite"}],"output":{"name":"handle"}}],[11,"new","","Creates a new initial named pipe.",15,{"inputs":[{"name":"namedpipe"},{"name":"a"}],"output":{"name":"result"}}],[11,"wait","","Waits until either a time-out interval elapses or an instance of the\nspecified named pipe is available for connection.",15,{"inputs":[{"name":"namedpipe"},{"name":"a"},{"name":"option"}],"output":{"name":"result"}}],[11,"connect","","Connects this named pipe to a client, blocking until one becomes\navailable.",15,{"inputs":[{"name":"namedpipe"}],"output":{"name":"result"}}],[11,"connect_overlapped","","Issue a connection request with the specified overlapped operation.",15,{"inputs":[{"name":"namedpipe"},{"name":"overlapped"}],"output":{"name":"result"}}],[11,"disconnect","","Disconnects this named pipe from any connected client.",15,{"inputs":[{"name":"namedpipe"}],"output":{"name":"result"}}],[11,"read_overlapped","","Issues an overlapped read operation to occur on this pipe.",15,null],[11,"write_overlapped","","Issues an overlapped write operation to occur on this pipe.",15,null],[11,"read","","",15,null],[11,"write","","",15,null],[11,"flush","","",15,{"inputs":[{"name":"namedpipe"}],"output":{"name":"result"}}],[11,"as_raw_handle","","",15,{"inputs":[{"name":"namedpipe"}],"output":{"name":"handle"}}],[11,"from_raw_handle","","",15,{"inputs":[{"name":"namedpipe"},{"name":"handle"}],"output":{"name":"namedpipe"}}],[11,"into_raw_handle","","",15,{"inputs":[{"name":"namedpipe"}],"output":{"name":"handle"}}],[11,"new","","Creates a new named pipe builder with the default settings.",16,{"inputs":[{"name":"namedpipebuilder"},{"name":"a"}],"output":{"name":"namedpipebuilder"}}],[11,"inbound","","Indicates whether data is allowed to flow from the client to the server.",16,{"inputs":[{"name":"namedpipebuilder"},{"name":"bool"}],"output":{"name":"self"}}],[11,"outbound","","Indicates whether data is allowed to flow from the server to the client.",16,{"inputs":[{"name":"namedpipebuilder"},{"name":"bool"}],"output":{"name":"self"}}],[11,"first","","Indicates that this pipe must be the first instance.",16,{"inputs":[{"name":"namedpipebuilder"},{"name":"bool"}],"output":{"name":"self"}}],[11,"accept_remote","","Indicates whether this server can accept remote clients or not.",16,{"inputs":[{"name":"namedpipebuilder"},{"name":"bool"}],"output":{"name":"self"}}],[11,"max_instances","","Specifies the maximum number of instances of the server pipe that are\nallowed.",16,{"inputs":[{"name":"namedpipebuilder"},{"name":"u8"}],"output":{"name":"self"}}],[11,"out_buffer_size","","Specifies the number of bytes to reserver for the output buffer",16,{"inputs":[{"name":"namedpipebuilder"},{"name":"u32"}],"output":{"name":"self"}}],[11,"in_buffer_size","","Specifies the number of bytes to reserver for the input buffer",16,{"inputs":[{"name":"namedpipebuilder"},{"name":"u32"}],"output":{"name":"self"}}],[11,"create","","Using the options in this builder, attempt to create a new named pipe.",16,{"inputs":[{"name":"namedpipebuilder"}],"output":{"name":"result"}}]],"paths":[[3,"CompletionStatus"],[3,"CompletionPort"],[8,"TcpStreamExt"],[8,"UdpSocketExt"],[8,"TcpBuilderExt"],[8,"TcpListenerExt"],[3,"SocketAddrBuf"],[3,"TcpStream"],[3,"UdpSocket"],[3,"TcpBuilder"],[3,"TcpListener"],[3,"AcceptAddrsBuf"],[3,"AcceptAddrs"],[3,"AnonRead"],[3,"AnonWrite"],[3,"NamedPipe"],[3,"NamedPipeBuilder"]]};
initSearch(searchIndex);
