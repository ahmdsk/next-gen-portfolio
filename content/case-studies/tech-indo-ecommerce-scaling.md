---
title: "Tech Indo Ecommerce Scaling"
client: "TechIndo Nusantara"
date: "2024-01-20"
category: "System Optimization"
image: "/images/case-studies/techindo.jpg"
summary: "Re-architecting the backend infrastructure of Indonesia's fastest-growing ecommerce platform to handle millions of concurrent users during Harbolnas (National Online Shopping Day)."
---

# Tech Indo Ecommerce Scaling

## The Challenge

TechIndo Nusantara, one of the leading tech decacorns in Indonesia, was facing critical infrastructure bottlenecks. During high-traffic events like *Harbolnas* (Hari Belanja Online Nasional), their monolithic architecture would struggle to keep up, resulting in slow page loads, failed transactions, and massive revenue loss. They needed a highly scalable, distributed system that could auto-scale instantaneously.

## Our Approach

NextGenInfinity collaborated directly with TechIndo's core engineering team to implement a highly resilient, event-driven microservices architecture. 

1.  **Decoupling the Monolith**: Breaking down the core services (Inventory, Checkout, Payment) into independent microservices.
2.  **Event-Driven Communication**: Implementing Apache Kafka to handle high-throughput asynchronous events.
3.  **Database Sharding**: Migrating their massive PostgreSQL database into a distributed cluster using Citus.

## The Solution Architecture

The new architecture guarantees high availability and massive horizontal scalability. Below is the simplified flow of the new checkout process:

```mermaid
sequenceDiagram
    participant User
    participant API_Gateway as API Gateway
    participant Checkout_Service as Checkout Service
    participant Inventory_Service as Inventory Service
    participant Payment_Gateway as Payment Service
    participant Kafka

    User->>API_Gateway: Initiate Checkout
    API_Gateway->>Checkout_Service: Route Request
    Checkout_Service->>Inventory_Service: Lock Items
    alt Items Available
        Inventory_Service-->>Checkout_Service: Items Locked
        Checkout_Service->>Payment_Gateway: Process Payment
        Payment_Gateway-->>Checkout_Service: Payment Success
        Checkout_Service->>Kafka: Publish "Order Created" Event
        Checkout_Service-->>User: Checkout Success
    else Items Out of Stock
        Inventory_Service-->>Checkout_Service: Out of Stock Error
        Checkout_Service-->>User: Checkout Failed
    end
```

## The Results

The impact was phenomenal. During the next Harbolnas event, TechIndo achieved:
- **Zero Downtime**: The system handled 5 million concurrent users flawlessly.
- **Latency Reduction**: 99th percentile (p99) API latency dropped from 2.5s to 120ms.
- **Revenue Protection**: Achieved 100% transaction success rate during peak traffic spikes.

> "The collaboration with NextGenInfinity has been incredible. They've provided not only the code, but also a world-class architectural foundation for TechIndo's future."
> — *VP of Engineering, TechIndo Nusantara*
