<div class="loader">
  <div class="thumb left" />
  <div class="finger left" />
  <div class="middle finger right left" />
  <div class="finger right" />
  <div class="pinky right" />
</div>

<style>
  .loader {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .thumb {
    height: 24px;
    width: 20px;
    background: #0f2027;
    border-top-left-radius: 15px;
  }
  .finger {
    height: 45px;
    width: 16px;
    background: #0f2027;
  }
  .pinky {
    height: 32px;
    width: 16px;
    background: #0f2027;
  }

  .right {
    border-top-right-radius: 15px;
  }

  .left {
    border-top-left-radius: 15px;
  }

  .middle {
    height: 50px;
    animation: bird 2s ease-in-out infinite
  }

  @keyframes bird {
  50% {
    height: 90px;
  }
}
</style>
