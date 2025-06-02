"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SolanaImg from "../../../../assets/solana.jpg";
import RustImg from "../../../../assets/images.png";
import Image from 'next/image'

interface BlogDetailsPageProps {
  params: { id: string };
}

const Blogs = ({ params }: BlogDetailsPageProps) => {
  const { id } = params;

  const searchParams = useSearchParams();
  const router = useRouter();
  const [article, setArticle]: any = useState<{
    id: string;
    title: string;
    content: [];
    date: string;
  } | null>(null);

  const para = "paragraph";
  const head = "heading";

  useEffect(() => {
    const articles = [
      {
        id: "1",
        title: "Understanding Solana: A Guide to a High-Performance Blockchain",
        content: [
          {
            type: "paragraph",
            text: "The Solana blockchain has emerged as one of the most technically ambitious and fastest-growing blockchains. Made for speed, scalability, and low fees, it attracted the attention of both developers and users — but what does Solana really make unique?",
          },
          {
            type: "paragraph",
            text: "In this blog, we will explore the main concepts behind Solana, how it is different from other chains like Ethereum, and why it is receiving traction in the decentralized application (DApp) ecosystem.",
          },
          {
            type: "heading",
            text: "🚀 What is Solana?",
          },
          {
            type: "image",
            src: SolanaImg,
          },
          {
            type: "paragraph",
            text: "Solana is a high-performance Layer 1 blockchain, aimed at providing fast, safe, and scalable decentralized applications and cryptocurrencies without relying on sharding or Layer 2 solutions.",
          },
          {
            type: "list",
            items: [
              "Blazing-Fast Transactions: 400ms block time",
              "Large-Scale Throughput: 65,000 transactions per second (TPS)",
              "Low Fees: Often fractions of a cent",
            ],
          },
          {
            type: "heading",
            text: "⏱️ Evidence of History (PoH): Solana's Secret Sauce",
          },
          {
            type: "paragraph",
            text: "Most blockchains rely on consensus mechanisms such as Proof of Work (Bitcoin) or Proof of Stake (Ethereum 2.0). Solana uses something different: Proof of History (PoH).",
          },
          {
            type: "paragraph",
            text: "🔍 PoH is a cryptographic clock that allows the nodes to agree on the order of events without communicating with each other in real-time.",
          },
          {
            type: head,
            text: "How PoH Works:",
          },
          {
            type: "list",
            items: [
              "A verification delay function produces a time-stamped sequence of the function.",
              "This timestamping helps validators process blocks independently and in parallel.",
              "This coordination reduces overhead — which means rapid block production.",
            ],
          },
          {
            type: head,
            text: "🧱 The Main Components of Solana",
          },
          {
            type: para,
            text: "To understand how Solana works under the hood, it's essential to break down its key architectural components. These are the building blocks every developer interacts with when building Solana-based DApps or smart contracts.",
          },
          {
            type: head,
            text: "1.  🗂 Accounts",
          },
          {
            type: para,
            text: "In Solana, everything revolves around accounts. Unlike Ethereum, where smart contracts and users are distinct entities, Solana treats everything as an account — including smart contracts (programs), users, and data storage.",
          },
          {
            type: head,
            text: "Types of Accounts:",
          },
          {
            type: "list",
            items: [
              "System Accounts: These are standard wallet or user accounts created by the Solana runtime. They hold SOL and interact with programs.",
              "Program Accounts: These are accounts that contain executable bytecode (smart contracts). Once deployed, program accounts become immutable.",
              "Data Accounts (Program Derived Addresses - PDAs): These are custom accounts used to store state or data. They're owned and managed by programs and can be updated based on business logic. ",
            ],
          },
          {
            type: head,
            text: "2. 🧠  Programs",
          },
          {
            type: para,
            text: "Programs are Solana's version of smart contracts — compiled into BPF bytecode and deployed on-chain. They’re written in Rust, C, or C++, with Rust + Anchor being the most popular setup today.",
          },
          {
            type: head,
            text: "Characteristics:",
          },
          {
            type: "list",
            items: [
              "Stateless: Programs don't store their own state; they operate on data passed via accounts.",
              "Deterministic: Execution must always produce the same result, regardless of validator or time.",
              "Permissionless: Anyone can call a program, but behavior is controlled via account checks and signer requirements.",
            ],
          },
          {
            type: head,
            text: "Program Lifecycle:",
          },
          {
            type: "list",
            items: [
              "Developer writes the program in Rust",
              "Compiles it into BPF",
              "Deploys it to Solana via CLI or SDK",
              "Frontends or other programs invoke it with instructions and accounts",
            ],
          },
          {
            type: head,
            text: "3. 🔁 Transactions & Instructions",
          },
          {
            type: para,
            text: "A transaction in Solana is a collection of one or more instructions.",
          },
          {
            type: head,
            text: "Instruction",
          },
          {
            type: para,
            text: "An instruction is like a function call in traditional programming — it tells a program what to do with the accounts it is given.",
          },
          {
            type: head,
            text: "Transaction",
          },
          {
            type: para,
            text: "A transaction groups multiple instructions into an atomic unit — either all instructions succeed, or none do.",
          },
          {
            type: head,
            text: "Structure",
          },
          {
            type: "list",
            items: [
              "Signers: One or more public/private key pairs that authorize the transaction.",
              "Message: Contains the list of accounts and the actual instructions.",
              "Recent Blockhash: Used to prevent replay attacks.",
            ],
          },
          {
            type: head,
            text: "4. ⚙️ Runtime",
          },
          {
            type: para,
            text: "Solana’s runtime is a custom-built engine that executes programs efficiently and securely.",
          },
          {
            type: head,
            text: "Features",
          },
          {
            type: "list",
            items: [
              "BPF Execution: Solana compiles smart contracts to eBPF, a fast and safe bytecode format.",
              "Parallelism: Via Sealevel (explained below), the runtime can run many programs at once — as long as they don’t overlap in account access.",
              "Determinism: Every validator must reach the same result when executing a program — this is enforced via strict runtime rules.",
            ],
          },
        ],
        date: "2025-06-01",
      },
      {
        id: "2",
        title: "🦀 Understanding Memory Management in Rust",
        content: [
          {
            type: para,
            text: "Rust is a modern systems programming language designed for speed, memory safety, and concurrency — all without needing a garbage collector.",
          },
          {
            type: para,
            text: "Memory management is a crucial aspect of programming, and Rust stands out by ensuring memory safety without using a garbage collector. Instead of relying on runtime checks, Rust enforces strict rules at compile time through its ownership system. These rules control how memory is accessed and ensure safe composition of programs. Concurrency in another powerful feature of Rust. It is achieved using powerful primitives such as threads, channels, and atomic operations. Thanks to its ownership and type system, the Rust compiler can catch data races at compile time, making it uniquely safe among system programming languages.",
          },
          {
            type: "image",
            src: RustImg,
          },
          {
            type: para,
            text: "This article moves through the main concepts of how rust handles the memory safely and effectively.",
          },
          {
            type: head,
            text: "🔑 Key Concepts in Rust Memory Management",
          },
          {
            type: head,
            text: "1. Ownership",
          },
          {
            type: para,
            text: "Every value in Rust has a single owner — the variable that holds it and when the owner goes out of scope the value is dropped",
          },
          {
            type: head,
            text: "2. Move Semantics",
          },
          {
            type: para,
            text: "In Rust, types have “move semantics” by default. This means that when you assign a value to a new variable or pass it into a function, the value will be moved rather than copied. This move-by-default model enables Rust to have memory safety guarantees without requiring garbage collection.",
          },
          {
            type: para,
            text: "Certain types in Rust implement the Copy trait, which means their values are simply copied when moved, leaving the source intact. Types that implement Copy include primitive types like integers, floats, booleans, characters, etc.",
          },
          // {
          //   type: para,
          //   text: "here comes code snippet",
          // },
          {
            type: head,
            text: "3. Borrowing and References",
          },
          {
            type: para,
            text: "In Rust, references are a way to get admission to information without taking ownership of it. Instead of shifting a value or copying it, you may create a reference — a kind of pointer — that permits you to take a look at or use the fee quickly. This reference points to the authentic records, and the possession stays with the authentic variable"
          },
          {
            type: para,
            text: "The act of the use of a reference is referred to as borrowing. When you borrow a price, you’re saying, “I want to use this, however I don’t need to personal it.” Borrowing lets you skip statistics around for your software with out duplicating it or giving up manage. This is especially beneficial in characteristic calls, where you may want a function to read or alter some thing without taking it over."
          },
          {
            type: head,
            text: "4. Lifetimes",
          },
          {
            type: para,
            text: "In Rust, lifetimes are a compile-time feature that tracks how long references are valid. Every reference in Rust has a lifetime, which is the scope for which that reference is guaranteed to be valid. Think of lifetimes as a way for Rust to ensure references do not outlive the data they point to.  ",
          },
        ],
        date: "2025-05-20",
      },
    ];

    const found = articles.find((a) => a.id === id);
    console.log("found", found);
    if (found) setArticle(found);
    else {
      router.push("/", { scroll: false });
      window.scrollTo(0, 0);
    }
  }, [searchParams, router, id]);

  if (!article) return null;

  return (
    <div className="min-h-screen px-4 py-16 max-w-3xl mx-auto animate-fade-in">
      <button
        onClick={() => router.back()}
        className="mb-6 text-wihte-600 hover:underline"
      >
        ← Back to Articles
      </button>
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{article.date}</p>

      {article.content.map((block: any, index: number) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p
                key={index}
                className="mb-3 prose prose-neutral dark:prose-invert max-w-none"
              >
                {block.text}
              </p>
            );
          case "image":
            console.log("image here", block);
            return (
              <Image
                key={index}
                src={block.src.src}
                alt={block.alt}
                className="my-8 mx-auto rounded-md shadow-md max-w-full"
                loading="lazy"
              />
            );
          case "list":
            return (
              <ul
                key={index}
                className="list-disc list-inside mb-6 prose prose-neutral dark:prose-invert max-w-none"
              >
                {block.items.map((item: any, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Blogs;
