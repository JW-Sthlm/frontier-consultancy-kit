# Case 06: what should the service agent know and do?

**HVE-DECISIONS-1.0. Fictional client interview/design feedback. RULE-06, approved knowledge and service-cases.csv remain authoritative.**

## Client interview evidence

- **C06-F1 / Mia:** "The agent should explain Repair and Delivery. It may help an employee submit a request, but it cannot promise a booking or compensation."
- **C06-F2 / Employee:** "Before anything is submitted, show the category and my description so I can correct or cancel."
- **C06-F3 / Service team:** "A request needs an accountable requester, reference, category, description and review status."
- **C06-F4 / Operator:** "If a user retries, they should not create a second request. If details changed, we must distinguish a new request from a retry."
- **C06-F5 / Mia:** "We have not asked to retain entire conversations. Do not store passwords, payroll or payment details just because they appear in chat."
- **C06-F6:** Allowed categories are Repair/Delivery, description is required and at most 500 characters, and the intended caller must have permission.

## Technology-specific decision context

Copilot Studio can answer from approved knowledge, collect information and call a bounded business action. Decide which of those capabilities the first service needs, what must remain human-owned and what information is transient conversation state versus persistent business data.

Do not assume that every conversational variable needs a database table or that adding a tool authorizes every user.

## Proposal to inspect

- **C06-P1:** Give the agent booking, compensation and payroll tools to make it look useful.
- **C06-P2:** Persist every chat message and use it as the only request record.
- **C06-P3:** A retry is always a new request; a changed description always overwrites the existing request.

## Change for discussion

- **C06-C1:** Mia asks whether users should see request status later. Decide the feature, identity/data needs and access boundaries before adding it.
- **C06-C2:** The user changes category after seeing the summary. Determine what confirmation/identity/history information must be retained and what can remain transient.

## Supplied fictional design-review feedback

| ID | Walkthrough finding |
|---|---|
| C06-T1 | The feature list confuses request submission with repair booking. |
| C06-T2 | The model has no stable way to identify the same request across a retry. |
| C06-T3 | Conversation text is stored but the service team cannot identify the accountable requester or request state. |
| C06-T4 | Status lookup would reveal another employee's requests. |
| C06-T5 | Unnecessary full-chat retention is included without a stated business purpose. |

No live agent conversation, flow execution or stored-row test is supplied.
