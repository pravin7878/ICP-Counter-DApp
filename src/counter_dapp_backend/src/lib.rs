use ic_cdk::export::candid::{candid_method, CandidType, Deserialize};
use ic_cdk::storage;
use std::cell::RefCell;

thread_local! {
    static COUNTER: RefCell<i32> = RefCell::new(0);
}

#[ic_cdk::query]
#[candid_method(query)]
fn get_count() -> i32 {
    COUNTER.with(|c| *c.borrow())
}

#[ic_cdk::update]
#[candid_method(update)]
fn increment() {
    COUNTER.with(|c| *c.borrow_mut() += 1);
}

#[ic_cdk::update]
#[candid_method(update)]
fn decrement() {
    COUNTER.with(|c| *c.borrow_mut() -= 1);
}

ic_cdk::export_candid!();
