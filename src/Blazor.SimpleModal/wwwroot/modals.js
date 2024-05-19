export function displayModal(id) {
    let modalInstance = bootstrap.Modal.getOrCreateInstance(id);
    modalInstance.show();
}

export function initializeModalEvents(id, modalEventsJsHelperRef) {
    // https://getbootstrap.com/docs/5.1/components/modal/#events
    let modalDOM = document.getElementById(id);
    modalDOM.addEventListener('hidden.bs.modal', function (e) {
        console.log(e);
        // Invokes the method stored in dotnet runtime.
        modalEventsJsHelperRef.invokeMethodAsync('ModalClosedAsync')
            .then(() => {
                console.log("[interop] Invoked ModalClosedAsync");
            });
    });
}